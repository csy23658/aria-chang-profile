"""Render one Gmail message as a PDF in Gmail's "Print" layout.

Used to produce evidence PDFs for data/profile.js when the only proof is an
email. Input is the message's own HTML body (as returned by the Gmail API,
quoted reply text included) plus its header fields; nothing is retyped.

Usage:
  python3 tools/gmail_print_pdf.py meta.json body.html out.pdf

meta.json keys: account, subject, sender, to, date (display string).
Requires headless Chromium (/opt/pw-browsers/chromium or $CHROMIUM) and a
CJK font (apt install fonts-wqy-microhei) for Chinese names/subjects.
Optional shrink afterwards: gs -sDEVICE=pdfwrite, then
qpdf --object-streams=generate --compression-level=9 --recompress-flate.
Output PDFs are evidence files: keep them in Drive, never in this repo.
"""
import html
import json
import os
import subprocess
import sys
import tempfile

TEMPLATE = """<!doctype html>
<html><head><meta charset="utf-8">
<style>
  body {{ font-family: Arial, "WenQuanYi Micro Hei", "Noto Sans CJK TC", sans-serif; font-size: 13px; margin: 24px; }}
  .acct {{ display: flex; justify-content: space-between; border-bottom: 2px solid #000;
           padding-bottom: 6px; margin-bottom: 12px; font-size: 12px; }}
  .acct b {{ font-size: 16px; }}
  h1 {{ font-size: 18px; margin: 8px 0 12px; }}
  .hdr {{ border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; padding: 8px 0; margin-bottom: 12px; }}
  .hdr td {{ padding: 1px 8px 1px 0; vertical-align: top; }}
  /* One sans family for everything keeps the embedded font subsets (and the PDF) small. */
  .msg, .msg * {{ font-family: Arial, "WenQuanYi Micro Hei", "Noto Sans CJK TC", sans-serif !important; }}
</style></head><body>
<div class="acct"><b>Gmail</b><span>{account}</span></div>
<h1>{subject}</h1>
<div class="hdr"><table>
  <tr><td><b>寄件者</b></td><td>{sender}</td></tr>
  <tr><td><b>收件者</b></td><td>{to}</td></tr>
  <tr><td><b>日期</b></td><td>{date}</td></tr>
</table></div>
<div class="msg">{body}</div>
</body></html>
"""


def main(meta_path, body_path, out_pdf):
    with open(meta_path, encoding="utf-8") as f:
        meta = json.load(f)
    with open(body_path, encoding="utf-8") as f:
        body = f.read()
    # The Gmail API returns decoded text; drop the original legacy charset tag.
    body = body.replace('charset=big5', 'charset=utf-8')
    page = TEMPLATE.format(body=body, **{k: html.escape(meta[k]) for k in
                                         ("account", "subject", "sender", "to", "date")})
    chromium = os.environ.get("CHROMIUM", "/opt/pw-browsers/chromium")
    if os.path.isdir(chromium):
        chromium = os.path.join(chromium, "chrome-linux", "chrome")
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8") as tmp:
        tmp.write(page)
    try:
        subprocess.run([chromium, "--headless", "--no-sandbox", "--disable-gpu",
                        "--no-pdf-header-footer", f"--print-to-pdf={os.path.abspath(out_pdf)}",
                        "file://" + tmp.name], check=True, capture_output=True)
    finally:
        os.unlink(tmp.name)


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    main(*sys.argv[1:])
