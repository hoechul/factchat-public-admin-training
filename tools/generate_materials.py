# -*- coding: utf-8 -*-
"""
FactChat 60분 실습교육 - 실습자료(PDF/이미지) 생성 스크립트.

여기서 생성하는 모든 문서/이미지는 교육 실습을 위한 "가상의 예시자료"이며
실제 기관명·인물·통계와 무관하다. public/materials/ 아래에 결과물을 저장한다.
각 파일은 공공기관 첨부파일 용량 제한을 고려해 1MB 이하로 유지한다.

실행: python tools/generate_materials.py
"""
import os

from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import Paragraph, Spacer, Table
from reportlab.graphics.shapes import Drawing
from reportlab.graphics.charts.barcharts import VerticalBarChart
from reportlab.graphics.charts.legends import Legend

from PIL import Image, ImageDraw, ImageFont

from pdf_kit import (
    OUT_DIR, FONT_REG, FONT_BOLD, BLUE,
    STYLE_EYEBROW, STYLE_TITLE, STYLE_META, STYLE_H2, STYLE_BODY,
    build_pdf, bullets, table_style,
)


# ---------------------------------------------------------------------------
# 모듈 1: 민원 접수 내용 예시
# ---------------------------------------------------------------------------
def module1():
    body = [
        Paragraph("민원 내용", STYLE_H2),
        Paragraph(
            "안녕하세요. 저는 OO동에 거주하는 주민입니다. 최근 저희 집 앞 OO공원 인근 가로등이 "
            "2주 넘게 고장난 상태로 방치되어 있어 야간에 통행하는 주민들의 안전이 우려됩니다. "
            "특히 최근 해당 구간에서 넘어짐 사고가 있었다는 이웃 주민의 이야기를 전해 들었습니다. "
            "빠른 시일 내에 가로등 수리가 이루어질 수 있도록 조치를 부탁드립니다.", STYLE_BODY),
        Spacer(1, 6),
        Paragraph(
            "아울러 향후 유사한 시설물 고장이 재발하지 않도록 정기 점검 주기를 안내해 주시면 "
            "감사하겠습니다. 답변은 문자메시지로 받아볼 수 있도록 부탁드립니다.", STYLE_BODY),
        Spacer(1, 10),
        Paragraph("실습 안내", STYLE_H2),
        bullets([
            "이 민원 내용을 FactChat 채팅창에 첨부한 뒤, 공식 답변 초안 작성 프롬프트를 실행해 보세요.",
            "생성된 답변에 처리 근거(규정)와 향후 조치 안내가 포함됐는지 확인해 보세요.",
        ]),
    ]
    build_pdf("module1-min-won-jeopsu-yesi.pdf",
              "FactChat 실습 예시자료 · Module 1", "민원 접수 내용 (실습용 예시자료)",
              [("접수번호", "2026-행정-00123"), ("접수일자", "2026.07.28"),
               ("처리기한", "2026.08.07 (접수일로부터 7일 이내)"),
               ("민원 유형", "생활불편 신고 (시설물 고장)"),
               ("민원인", "김OO (가명, 실습용 가상 인물)")],
              body)


# ---------------------------------------------------------------------------
# 모듈 2: 부서 회의록 예시
# ---------------------------------------------------------------------------
def module2():
    body = [
        Paragraph("안건 1. 여름철 재난안전 대응 체계 점검", STYLE_H2),
        bullets([
            "여름철 집중호우 대비 비상연락망이 2025년 기준으로 갱신되지 않아 최신화가 필요함.",
            "취약지역(반지하, 하천 인근) 현장 점검을 8월 첫째 주까지 완료하기로 함.",
            "유관기관(소방서, 한국전력)과의 협조 체계는 기존대로 유지하되 담당자 연락처만 갱신.",
        ]),
        Paragraph("안건 2. 주민참여예산 신청 접수 현황 공유", STYLE_H2),
        bullets([
            "현재까지 접수 건수는 목표 대비 62% 수준으로 다소 저조함.",
            "동 주민센터 게시판과 SNS 채널을 통한 추가 홍보가 필요하다는 의견이 제시됨.",
            "접수 마감은 7월 31일로 변경 없이 유지하기로 함.",
        ]),
        Paragraph("안건 3. 하반기 청사 시설 보수 계획", STYLE_H2),
        bullets([
            "본관 3층 화장실 배관 노후로 인한 누수 보수가 우선순위로 논의됨.",
            "예산 확보 여부에 따라 일부 항목은 내년으로 이월될 수 있음.",
        ]),
        Spacer(1, 6),
        Paragraph("결정사항", STYLE_H2),
        Table(
            [["번호", "결정사항", "담당", "기한"],
             ["1", "재난안전 비상연락망 갱신", "행정지원과", "2026.08.05"],
             ["2", "주민참여예산 접수 마감 추가 홍보", "홍보담당", "2026.07.31"],
             ["3", "시설 보수 예산 재확인 후 보고", "회계담당", "2026.08.10"]],
            colWidths=[14 * mm, 84 * mm, 30 * mm, 22 * mm],
            style=table_style(),
        ),
        Spacer(1, 10),
        Paragraph("차기 확인 필요 사항", STYLE_H2),
        bullets(["시설 보수 견적 3개사 비교 결과 (다음 회의 시 보고)"]),
        Spacer(1, 8),
        Paragraph("실습 안내", STYLE_H2),
        bullets(["이 회의록 전문을 첨부한 뒤, 안건별 요지·결정사항·담당부서를 표로 정리하는 프롬프트를 실행해 보세요."]),
    ]
    build_pdf("module2-hoeuirok-yesi.pdf",
              "FactChat 실습 예시자료 · Module 2", "2026년 7월 정기 부서회의록 (실습용 예시자료)",
              [("일시", "2026.07.20(월) 14:00~15:20"), ("장소", "본관 3층 소회의실"),
               ("참석자", "행정지원과장, 주무관 A·B·C, 서기 (전원 가명)")],
              body)


# ---------------------------------------------------------------------------
# 모듈 3: 행사 개요 예시 (보도자료용 소재)
# ---------------------------------------------------------------------------
def module3():
    body = [
        Paragraph("주요 프로그램", STYLE_H2),
        bullets([
            "지역 예술단 공연 (18:30~19:30, 야외무대)",
            "야시장 부스 40개 운영 (지역 소상공인 참여)",
            "어린이 체험존 (페이스페인팅, 미니게임)",
            "불꽃 쇼 (20:40~20:50, 하천 방향 조망 권장)",
        ]),
        Paragraph("참여 안내", STYLE_H2),
        bullets([
            "사전 신청 없이 누구나 무료로 참여 가능",
            "반려동물 동반은 지정 구역에 한해 가능 (목줄 필수)",
            "우천 시 일부 프로그램은 취소되거나 실내로 변경될 수 있음",
        ]),
        Spacer(1, 8),
        Paragraph("실습 안내", STYLE_H2),
        bullets([
            "이 개요와 함께 첨부된 행사 이미지를 참고해 보도자료 초안을 작성해 보세요.",
            "이어서 보도자료 내용을 홍보용 카드뉴스 이미지로 만드는 이미지 생성 프롬프트도 실행해 보세요.",
        ]),
    ]
    build_pdf("module3-haengsa-gaeyo-yesi.pdf",
              "FactChat 실습 예시자료 · Module 3", "OO시 여름밤 문화축제 개최 개요 (실습용 예시자료)",
              [("행사명", "2026 OO시 여름밤 문화축제"), ("일시", "2026.08.15(토) 18:00~21:00"),
               ("장소", "OO시민공원 야외무대"), ("주최/주관", "OO시청 문화체육과 / OO문화재단"),
               ("예상 인원", "시민 약 3,000명"), ("문의처", "OO시청 문화체육과 (02-000-0000)")],
              body)


def module3_image():
    W, H = 1600, 1000
    img = Image.new("RGB", (W, H), "#0d1230")
    draw = ImageDraw.Draw(img)

    # 브랜드 그라디언트풍 배경 (대각선 블렌드)
    top = (58, 70, 196)      # #3A46C4
    bottom = (18, 19, 21)    # #121315
    for y in range(H):
        t = y / H
        r = int(top[0] * (1 - t) + bottom[0] * t)
        g = int(top[1] * (1 - t) + bottom[1] * t)
        b = int(top[2] * (1 - t) + bottom[2] * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # 은은한 '불꽃놀이' 점 장식
    import random
    random.seed(7)
    for _ in range(140):
        x = random.randint(0, W)
        y = random.randint(0, int(H * 0.55))
        r = random.randint(2, 5)
        c = random.choice([(255, 255, 255), (148, 176, 236), (214, 224, 247)])
        draw.ellipse([x - r, y - r, x + r, y + r], fill=c)

    # 무대 실루엣
    draw.polygon([(0, H), (0, H - 160), (W, H - 220), (W, H)], fill=(9, 11, 26))

    f_title = ImageFont.truetype(FONT_BOLD, 74)
    f_sub = ImageFont.truetype(FONT_REG, 34)
    f_tag = ImageFont.truetype(FONT_REG, 26)

    draw.text((90, 300), "2026 여름밤", font=f_title, fill="#FFFFFF")
    draw.text((90, 390), "문화축제", font=f_title, fill="#94B0EC")
    draw.text((90, 500), "8.15(토) 18:00 · OO시민공원 야외무대", font=f_sub, fill="#EAECEF")
    draw.text((90, 560), "지역 예술단 공연 · 야시장 40개 부스 · 불꽃 쇼", font=f_sub, fill="#B7BCC8")

    # 우측 상단 워터마크(예시 이미지임을 명확히 표기)
    draw.text((W - 340, 40), "실습용 예시 이미지", font=f_tag, fill="#7F8493")

    path = os.path.join(OUT_DIR, "module3-haengsa-sajin-yesi.jpg")
    img.save(path, "JPEG", quality=82, optimize=True)
    print("이미지 생성:", path, f"{os.path.getsize(path)/1024:.1f} KB")


# ---------------------------------------------------------------------------
# 모듈 4: 공공데이터 통계표 예시 (참고자료)
# ---------------------------------------------------------------------------
def module4():
    years = ["2021", "2022", "2023", "2024", "2025"]
    ours = [17.2, 18.0, 18.9, 19.8, 20.6]
    nat = [16.5, 17.4, 18.4, 19.2, 20.1]

    tbl_rows = [["연도", "OO시 고령인구비율", "전국 평균"]]
    for y, o, n in zip(years, ours, nat):
        tbl_rows.append([y, f"{o}%", f"{n}%"])

    chart_drawing = Drawing(420, 170)
    bc = VerticalBarChart()
    bc.x = 30
    bc.y = 20
    bc.height = 130
    bc.width = 360
    bc.data = [ours, nat]
    bc.categoryAxis.categoryNames = years
    bc.categoryAxis.labels.fontName = "Malgun"
    bc.categoryAxis.labels.fontSize = 8
    bc.valueAxis.valueMin = 0
    bc.valueAxis.valueMax = 24
    bc.valueAxis.labels.fontName = "Malgun"
    bc.valueAxis.labels.fontSize = 8
    bc.bars[0].fillColor = BLUE
    bc.bars[1].fillColor = colors.HexColor("#B7BCC8")
    bc.groupSpacing = 10
    chart_drawing.add(bc)

    legend = Legend()
    legend.x = 30
    legend.y = 160
    legend.fontName = "Malgun"
    legend.fontSize = 8
    legend.dx = 8
    legend.dy = 8
    legend.columnMaximum = 1
    legend.colorNamePairs = [(BLUE, "OO시"), (colors.HexColor("#B7BCC8"), "전국 평균")]
    chart_drawing.add(legend)

    body = [
        Paragraph("연도별 비교표", STYLE_H2),
        Table(tbl_rows, colWidths=[24 * mm, 60 * mm, 40 * mm],
              style=table_style(align_center_from=1)),
        Spacer(1, 14),
        Paragraph("그래프", STYLE_H2),
        chart_drawing,
        Spacer(1, 10),
        Paragraph("실습 안내", STYLE_H2),
        bullets([
            "이 표는 참고용 예시이며, 실습에서는 FactChat의 Korea-in-Data 기능에 직접 질의해 "
            "최신 공식 통계로 우리 지역 수치를 확인해 보세요.",
            "생성된 분석 결과가 이 참고표의 추세와 유사한 흐름을 보이는지 비교해 보세요.",
        ]),
    ]
    build_pdf("module4-tonggyepyo-yesi.pdf",
              "FactChat 실습 예시자료 · Module 4", "OO시 65세 이상 인구비율 추이 (2021~2025, 참고자료)",
              [("출처", "실습용 가상 통계 (실제 공식 통계 아님)"), ("단위", "인구 대비 비율(%)")],
              body)


# ---------------------------------------------------------------------------
# 모듈 5: 조례 초안 예시 (검토 실습용 - 의도적으로 모호한 조항 포함)
# ---------------------------------------------------------------------------
def module5():
    body = [
        Paragraph("제1조(목적)", STYLE_H2),
        Paragraph("이 조례는 OO시 관내 유휴 공유공간의 활용을 활성화하여 주민의 복리 증진에 이바지함을 목적으로 한다.", STYLE_BODY),
        Paragraph("제2조(정의)", STYLE_H2),
        Paragraph("\"공유공간\"이란 시가 소유하거나 관리하는 시설 중 주민이 공동으로 이용할 수 있도록 개방한 공간을 말한다.", STYLE_BODY),
        Paragraph("제3조(지원 대상 및 범위)", STYLE_H2),
        Paragraph(
            "① 시장은 공유공간을 운영하는 단체에 대하여 예산의 범위에서 운영비를 지원할 수 있다.<br/>"
            "② 지원 금액은 단체별 연간 3천만원을 초과할 수 없다. 다만 시장이 특히 필요하다고 인정하는 경우에는 "
            "이를 초과하여 지원할 수 있다.", STYLE_BODY),
        Paragraph("제4조(지원 절차)", STYLE_H2),
        Paragraph("지원을 받으려는 단체는 매년 2월 말까지 지원신청서를 시장에게 제출하여야 한다.", STYLE_BODY),
        Paragraph("제5조(시행일)", STYLE_H2),
        Paragraph("이 조례는 공포한 날부터 시행한다.", STYLE_BODY),
        Spacer(1, 10),
        Paragraph("참고 - 상위 법령 발췌 (가상)", STYLE_H2),
        Paragraph(
            "「지역균형발전 지원법(가상)」 제12조: 지방자치단체는 공유공간 운영 지원 시 "
            "단체별 연간 지원 한도를 조례로 정하되, 예외 없이 이를 준수하여야 한다.", STYLE_BODY),
        Spacer(1, 10),
        Paragraph("실습 안내", STYLE_H2),
        bullets([
            "제3조 제2항의 단서(\"다만 시장이 특히 필요하다고~\")가 상위 법령의 \"예외 없이 준수\" 원칙과 "
            "상충될 수 있는지 검토해 보세요.",
            "이 조례안을 첨부한 뒤, 상충·모호 조항을 찾아 표로 정리하는 프롬프트를 실행해 보세요.",
        ]),
    ]
    build_pdf("module5-joryechoan-yesi.pdf",
              "FactChat 실습 예시자료 · Module 5", "OO시 공유공간 활성화 지원 조례(안) (실습용 예시자료)",
              [("입법예고", "2026.07.10 ~ 2026.07.30"), ("소관부서", "행정지원과 (가상)")],
              body)


# ---------------------------------------------------------------------------
# 모듈 6: 보고 내용 요약 예시 (PPT 자동 생성용 소재)
# ---------------------------------------------------------------------------
def module6():
    body = [
        Paragraph("추진배경", STYLE_H2),
        Paragraph("노후 청사 인근 유휴부지를 활용해 주민 복합문화공간을 조성함으로써 지역 문화 인프라 부족 문제를 해소하고자 함.", STYLE_BODY),
        Paragraph("추진현황", STYLE_H2),
        bullets([
            "1단계 부지선정: 완료 (2026.03)",
            "2단계 기본설계: 진행 중 (진행률 65%, 2026.09 완료 예정)",
            "3단계 착공: 예정 (2027.01)",
        ]),
        Paragraph("예산현황", STYLE_H2),
        Paragraph("총사업비 48억원 중 2026년 상반기까지 20.2억원 집행 (집행률 42%).", STYLE_BODY),
        Paragraph("향후계획", STYLE_H2),
        Table(
            [["시기", "내용"],
             ["2026.09", "기본설계 완료 및 주민설명회 개최"],
             ["2026.12", "실시설계 및 인허가 절차 완료"],
             ["2027.01", "착공"],
             ["2028.06", "준공 및 개관"]],
            colWidths=[28 * mm, 96 * mm],
            style=table_style(),
        ),
        Spacer(1, 10),
        Paragraph("기대효과 및 유의사항", STYLE_H2),
        bullets([
            "기대효과: 문화시설 접근성 개선, 지역 상권 활성화, 세대 간 교류공간 확보",
            "유의사항: 설계 변경 시 예산 재검토 필요, 주민설명회 의견 반영 절차 필수",
        ]),
        Spacer(1, 8),
        Paragraph("실습 안내", STYLE_H2),
        bullets(["이 요약 내용을 첨부한 뒤, 상급자 보고용 PPT를 8장 이내로 생성하는 프롬프트를 실행해 보세요."]),
    ]
    build_pdf("module6-bogo-yosyak-yesi.pdf",
              "FactChat 실습 예시자료 · Module 6", "2026년 하반기 OO복합문화공간 조성사업 추진현황 (요약, 실습용 예시자료)",
              [("작성부서", "기획재정과 (가상)"), ("보고일", "2026.07.25")],
              body)


if __name__ == "__main__":
    module1()
    module2()
    module3()
    module3_image()
    module4()
    module5()
    module6()
    print("\n모든 실습자료 생성 완료 ->", OUT_DIR)
