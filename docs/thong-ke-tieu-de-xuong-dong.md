# Thống kê tiêu đề xuống dòng

> Đây là bảng trước khi chỉnh bố cục. Bản thử mới đã giảm cỡ chữ và cân lại chiều rộng: tiêu đề giới thiệu trang chủ 2 → 1 dòng; tin tức và tuyển dụng trang chủ 2 → 1; tiêu đề các trang chi tiết hệ sinh thái 2 → 1; bài viết dài nhất 7 → 3 dòng ở cùng viewport 1422px.

Ngày kiểm tra: 06/10/2026. Font: Be Vietnam Pro. Viewport: 1422 × 900px, gần chiều rộng ảnh tham khảo.

Phạm vi: 28 URL React hiện có (6 trang chính, 4 trang chi tiết hệ sinh thái, 5 bài viết, 13 việc làm). Không tính đoạn văn, màn mở đầu tạm thời hoặc tài liệu hồ sơ năng lực riêng.

Có 54 vị trí tiêu đề từ hai dòng trở lên; một tiêu đề xuất hiện ở nhiều trang được tính thành nhiều vị trí. Số dòng tính theo chiều cao nội dung và line-height sau khi font tải xong; sẽ thay đổi khi đổi chiều rộng màn hình.

Đây là thống kê bố cục, không đồng nghĩa tất cả đều là lỗi. Tiêu đề hero trang chủ chủ động chia hai dòng; tiêu đề bài viết dài và mô tả trong các thẻ cũng có thể cần giữ nhiều dòng. Bảng dưới giữ lại số liệu trước sửa để đối chiếu.

Ảnh người dùng: GIỚI THIỆU MATRIX HOLDING trên trang chủ, 2 dòng, khung khoảng 508px. Sửa bố cục ở src/sections/About/About.css; cỡ chữ chung ở src/components/layout/SiteLayout.css (.section-heading h2).

## /

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 1 | Kiến tạo hệ sinh thái kinh doanh đa ngành | 2 | 615 | [Hero.css](/home/hoanganh/matrix-reimagined/src/sections/Hero/Hero.css) |
| 2 | GIỚI THIỆU MATRIX HOLDING | 2 | 508 | [About.css](/home/hoanganh/matrix-reimagined/src/sections/About/About.css) |
| 3 | TIN TỨC MỚI NHẤT TỪ MATRIX HOLDING | 2 | 860 | [News.css](/home/hoanganh/matrix-reimagined/src/sections/News/News.css) |
| 4 | MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH | 2 | 804 | [News.css](/home/hoanganh/matrix-reimagined/src/sections/News/News.css) |
| 5 | MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP TẠI VIỆT NAM | 2 | 804 | [News.css](/home/hoanganh/matrix-reimagined/src/sections/News/News.css) |
| 6 | MATRIX COMMUNITY HỆ SINH THÁI CỘNG ĐỒNG KẾT NỐI KINH DOANH VIỆT NAM | 2 | 804 | [News.css](/home/hoanganh/matrix-reimagined/src/sections/News/News.css) |
| 7 | MATRIX HOLDING: TỪ MỘT STARTUP 0 ĐỒNG ĐẾN KHÁT VỌNG TRỞ THÀNH NGƯỜI KIẾN TẠO TƯƠNG LAI CHO THẾ HỆ KỲ LÂN TƯƠNG LAI | 2 | 804 | [News.css](/home/hoanganh/matrix-reimagined/src/sections/News/News.css) |
| 8 | Thông tin tuyển dụng từ Matrix Holding | 2 | 860 | [Careers.css](/home/hoanganh/matrix-reimagined/src/sections/Careers/Careers.css) |
| 9 | Bạn đã sẵn sàng trở thành đối tác của chúng tôi? | 3 | 760 | [ContactCta.css](/home/hoanganh/matrix-reimagined/src/sections/ContactCta/ContactCta.css) |

## /gioi-thieu

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 10 | Từ khởi nguồn sáng tạo đến hệ sinh thái kinh doanh đa ngành. | 2 | 850 | [BrandInformation.css](/home/hoanganh/matrix-reimagined/src/sections/About/BrandInformation.css) |
| 11 | “Là thương hiệu tiên phong trong lĩnh vực tư vấn, đầu tư và phát triển hệ sinh thái kinh doanh đa ngành.” | 3 | 870 | [AboutSections.css](/home/hoanganh/matrix-reimagined/src/sections/About/AboutSections.css) |
| 12 | Kiến tạo nền tảng để doanh nghiệp tiếp cận, mở ra cơ hội hợp tác và phát triển vượt trội. | 4 | 316 | [AboutSections.css](/home/hoanganh/matrix-reimagined/src/sections/About/AboutSections.css) |
| 13 | Trở thành doanh nghiệp kiến tạo hệ sinh thái kinh doanh hàng đầu tại Việt Nam. | 4 | 316 | [AboutSections.css](/home/hoanganh/matrix-reimagined/src/sections/About/AboutSections.css) |
| 14 | Ươm mầm và hiện thực hóa ý tưởng kinh doanh tiềm năng cùng thế hệ doanh nhân trẻ khởi nghiệp. | 5 | 316 | [AboutSections.css](/home/hoanganh/matrix-reimagined/src/sections/About/AboutSections.css) |

## /he-sinh-thai

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 15 | Kết nối nguồn lực. Cùng nhau phát triển. | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |
| 16 | Một hệ sinh thái, kết nối đa chiều. | 2 | 404 | [EcosystemConnections.css](/home/hoanganh/matrix-reimagined/src/sections/Ecosystem/EcosystemConnections.css) |

## /tin-tuc

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 17 | MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH | 2 | 956 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |
| 18 | MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP TẠI VIỆT NAM | 2 | 956 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |
| 19 | MATRIX COMMUNITY HỆ SINH THÁI CỘNG ĐỒNG KẾT NỐI KINH DOANH VIỆT NAM | 2 | 956 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |
| 20 | MATRIX HOLDING: TỪ MỘT STARTUP 0 ĐỒNG ĐẾN KHÁT VỌNG TRỞ THÀNH NGƯỜI KIẾN TẠO TƯƠNG LAI CHO THẾ HỆ KỲ LÂN TƯƠNG LAI | 2 | 956 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |

## /tuyen-dung

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 21 | Cơ hội phù hợp cho hành trình tiếp theo của bạn. | 3 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |
| 22 | Kết nối với đúng cơ hội, đúng doanh nghiệp. | 4 | 204 | [CareersPage.css](/home/hoanganh/matrix-reimagined/src/pages/CareersPage.css) |

## /lien-he

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 23 | Cùng kiến tạo những cơ hội hợp tác giá trị. | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |
| 24 | Gặp gỡ và kết nối cùng chúng tôi. | 2 | 464 | [ContactPage.css](/home/hoanganh/matrix-reimagined/src/pages/ContactPage.css) |
| 25 | Gửi thông tin cho Matrix Holding | 2 | 513 | [ContactPage.css](/home/hoanganh/matrix-reimagined/src/pages/ContactPage.css) |

## /he-sinh-thai/matrix-network

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 26 | Nguồn lực để doanh nghiệp tiến xa hơn. | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /he-sinh-thai/matrix-connect

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 27 | Kết nối hôm nay. Cơ hội ngày mai. | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /he-sinh-thai/matrix-ventures

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 28 | Đồng hành cùng những ý tưởng có tiềm năng. | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /he-sinh-thai/matrix-academy

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 29 | Phát triển năng lực. Kiến tạo tương lai. | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tin-tuc/5

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 30 | MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH | 5 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |
| 31 | MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP TẠI VIỆT NAM | 3 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |
| 32 | MATRIX CAPITAL HỆ SINH THÁI CỘNG ĐỒNG KẾT NỐI ĐẦU TƯ VIỆT NAM | 2 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |

## /tin-tuc/4

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 33 | MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP TẠI VIỆT NAM | 5 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |
| 34 | MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH | 3 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |
| 35 | MATRIX CAPITAL HỆ SINH THÁI CỘNG ĐỒNG KẾT NỐI ĐẦU TƯ VIỆT NAM | 2 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |

## /tin-tuc/3

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 36 | MATRIX CAPITAL HỆ SINH THÁI CỘNG ĐỒNG KẾT NỐI ĐẦU TƯ VIỆT NAM | 4 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |
| 37 | MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH | 3 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |
| 38 | MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP TẠI VIỆT NAM | 3 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |

## /tin-tuc/2

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 39 | MATRIX COMMUNITY HỆ SINH THÁI CỘNG ĐỒNG KẾT NỐI KINH DOANH VIỆT NAM | 4 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |
| 40 | MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH | 3 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |
| 41 | MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP TẠI VIỆT NAM | 3 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |

## /tin-tuc/1

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 42 | MATRIX HOLDING: TỪ MỘT STARTUP 0 ĐỒNG ĐẾN KHÁT VỌNG TRỞ THÀNH NGƯỜI KIẾN TẠO TƯƠNG LAI CHO THẾ HỆ KỲ LÂN TƯƠNG LAI | 7 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |
| 43 | MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH | 3 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |
| 44 | MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP TẠI VIỆT NAM | 3 | 508 | [NewsPage.css](/home/hoanganh/matrix-reimagined/src/pages/NewsPage.css) |

## /tuyen-dung/13

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 45 | Chuyên viên Kế toán Tổng hợp | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/12

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 46 | Chuyên viên Phân tích Tài chính | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/11

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 47 | Chuyên viên Pháp lý Doanh nghiệp | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/10

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 48 | Chuyên viên Nghiên cứu Thị trường | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/9

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 49 | Chuyên viên Chiến lược Doanh nghiệp | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/8

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 50 | Tuyển dụng Giám đốc Điều hành | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/7

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 51 | Tuyển dụng Giám đốc Điều hành | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/6

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 52 | Chuyên viên Truyền thông | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/5

Không có tiêu đề từ hai dòng trở lên ở kích thước kiểm tra.

## /tuyen-dung/4

Không có tiêu đề từ hai dòng trở lên ở kích thước kiểm tra.

## /tuyen-dung/3

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 53 | Chuyên viên Vận hành Dự án | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/2

| STT | Tiêu đề | Số dòng | Khung (px) | CSS |
| --- | --- | --- | --- | --- |
| 54 | Chuyên viên Kiểm soát Hợp đồng | 2 | 900 | [PageShell.css](/home/hoanganh/matrix-reimagined/src/components/layout/PageShell.css) |

## /tuyen-dung/1

Không có tiêu đề từ hai dòng trở lên ở kích thước kiểm tra.
