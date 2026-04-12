import sys
try:
    from Quartz.PDFKit import PDFDocument
    from Foundation import NSURL
except ImportError:
    print("Quartz no disponible.")
    sys.exit(1)

def extract_text(pdf_path):
    url = NSURL.fileURLWithPath_(pdf_path)
    pdf = PDFDocument.alloc().initWithURL_(url)
    if not pdf:
        return ""
    text = ""
    for i in range(min(3, pdf.pageCount())): # first 3 pages
        page = pdf.pageAtIndex_(i)
        if page:
            text += page.string() + "\n"
    return text

print(extract_text("pdfs/uned_01_Bolsa.pdf")[:500])
