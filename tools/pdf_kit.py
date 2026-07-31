# -*- coding: utf-8 -*-
"""공통 PDF 생성 유틸리티. generate_materials.py / generate_studio_materials.py가 공유한다.

모든 산출물은 교육 실습을 위한 가상의 예시자료이며 실제 기관·인물·통계와 무관하다.
"""
import os

from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, ListFlowable, ListItem,
)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public", "materials")
os.makedirs(OUT_DIR, exist_ok=True)

FONT_REG = r"C:\Windows\Fonts\malgun.ttf"
FONT_BOLD = r"C:\Windows\Fonts\malgunbd.ttf"

pdfmetrics.registerFont(TTFont("Malgun", FONT_REG))
pdfmetrics.registerFont(TTFont("MalgunBold", FONT_BOLD))
registerFontFamily("Malgun", normal="Malgun", bold="MalgunBold", italic="Malgun", boldItalic="MalgunBold")

# FactChat 브랜드 컬러
BLUE = colors.HexColor("#1751D0")
BLUE_DARK = colors.HexColor("#242B90")
INK = colors.HexColor("#121315")
INK_2 = colors.HexColor("#2A2D38")
GRAY = colors.HexColor("#595E6A")
GRAY_LIGHT = colors.HexColor("#7F8493")
BG_SOFT = colors.HexColor("#EFF4FF")
LINE = colors.HexColor("#E5E7EB")

STYLE_EYEBROW = ParagraphStyle("eyebrow", fontName="MalgunBold", fontSize=9.5, textColor=BLUE,
                                spaceAfter=4, leading=12)
STYLE_TITLE = ParagraphStyle("title", fontName="MalgunBold", fontSize=18, textColor=INK,
                              spaceAfter=10, leading=24)
STYLE_META = ParagraphStyle("meta", fontName="Malgun", fontSize=9, textColor=GRAY, leading=13)
STYLE_H2 = ParagraphStyle("h2", fontName="MalgunBold", fontSize=12.5, textColor=BLUE_DARK,
                           spaceBefore=14, spaceAfter=6, leading=16)
STYLE_BODY = ParagraphStyle("body", fontName="Malgun", fontSize=10, textColor=INK_2,
                             leading=16, alignment=TA_LEFT)
STYLE_BULLET = ParagraphStyle("bullet", fontName="Malgun", fontSize=10, textColor=INK_2, leading=15)
STYLE_FOOT = ParagraphStyle("foot", fontName="Malgun", fontSize=8, textColor=GRAY_LIGHT, leading=11)


def table_style(header_bg=BG_SOFT, header_fg=BLUE_DARK, align_center_from=None):
    style = [
        ("FONTNAME", (0, 0), (-1, -1), "Malgun"),
        ("FONTNAME", (0, 0), (-1, 0), "MalgunBold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9.5),
        ("BACKGROUND", (0, 0), (-1, 0), header_bg),
        ("TEXTCOLOR", (0, 0), (-1, 0), header_fg),
        ("GRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]
    if align_center_from is not None:
        style.append(("ALIGN", (align_center_from, 0), (-1, -1), "CENTER"))
    return TableStyle(style)


def _footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(20 * mm, 16 * mm, 190 * mm, 16 * mm)
    canvas.setFont("Malgun", 7.5)
    canvas.setFillColor(GRAY_LIGHT)
    canvas.drawString(20 * mm, 11 * mm,
                       "※ 본 자료는 FactChat 실습교육을 위해 작성된 가상의 예시입니다. 실제 기관·인물·수치와 무관합니다.")
    canvas.drawRightString(190 * mm, 11 * mm, f"FactChat 실무교육 실습자료 · {doc.page}p")
    canvas.restoreState()


def build_pdf(fname, eyebrow, title, meta_lines, flow_extra):
    path = os.path.join(OUT_DIR, fname)
    doc = SimpleDocTemplate(path, pagesize=A4,
                             topMargin=20 * mm, bottomMargin=22 * mm,
                             leftMargin=20 * mm, rightMargin=20 * mm,
                             title=title)
    story = [Paragraph(eyebrow, STYLE_EYEBROW), Paragraph(title, STYLE_TITLE)]
    if meta_lines:
        rows = [[Paragraph(k, STYLE_META), Paragraph(v, STYLE_META)] for k, v in meta_lines]
        t = Table(rows, colWidths=[28 * mm, 122 * mm])
        t.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ("TOPPADDING", (0, 0), (-1, -1), 3),
        ]))
        story.append(t)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1, color=LINE, spaceAfter=10))
    story.extend(flow_extra)
    doc.build(story, onFirstPage=_footer, onLaterPages=_footer)
    print("PDF 생성:", path, f"{os.path.getsize(path)/1024:.1f} KB")


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(i, STYLE_BULLET), spaceAfter=4) for i in items],
        bulletType="bullet", start="circle", leftIndent=12,
    )
