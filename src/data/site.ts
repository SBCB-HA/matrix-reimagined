import { ecosystem } from "./home";
import { referenceNews } from "./reference";

export const siteNavigation = [
  { label: "Trang chủ", to: "/" },
  { label: "Giới thiệu", to: "/gioi-thieu" },
  { label: "Hệ sinh thái", to: "/he-sinh-thai" },
  { label: "Tin tức", to: "/tin-tuc" },
  { label: "Tuyển dụng", to: "/tuyen-dung" },
  { label: "Liên hệ", to: "/lien-he" },
] as const;

export const contact = {
  email: "matrixholding.support@gmail.com",
  phone: "(+84) 964 243 026",
  phoneHref: "tel:+84964243026",
  address: "KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội",
};

const ecosystemContent = [
  {
    slug: "matrix-network",
    headline: "Nguồn lực để doanh nghiệp tiến xa hơn.",
    focus: "Dịch vụ doanh nghiệp",
    introduction:
      "Matrix Network giữ vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ trong hệ sinh thái. Trọng tâm là kết nối những nguồn lực phù hợp với nhu cầu vận hành và phát triển của doanh nghiệp.",
    capabilities: [
      {
        title: "Chiến lược & nghiên cứu",
        text: "Kết nối doanh nghiệp với các nguồn lực nghiên cứu và xây dựng định hướng phát triển.",
      },
      {
        title: "Tài chính & pháp lý",
        text: "Điều phối kết nối với các đơn vị chuyên môn trong lĩnh vực tài chính, kế toán và pháp lý.",
      },
      {
        title: "Vận hành doanh nghiệp",
        text: "Tạo điều kiện tiếp cận nguồn lực phục vụ các hoạt động vận hành trong hệ sinh thái.",
      },
    ],
  },
  {
    slug: "matrix-connect",
    headline: "Kết nối hôm nay. Cơ hội ngày mai.",
    focus: "Cộng đồng kinh doanh",
    introduction:
      "Matrix Connect xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh. Thông qua mạng lưới cộng đồng, doanh nghiệp có thêm không gian để trao đổi kinh nghiệm, tìm kiếm đối tác và phát triển quan hệ hợp tác.",
    capabilities: [
      {
        title: "Cộng đồng doanh nghiệp",
        text: "Kết nối các doanh nghiệp có nhu cầu chia sẻ kinh nghiệm và phát triển cùng nhau.",
      },
      {
        title: "Quan hệ đối tác",
        text: "Mở ra các cuộc trao đổi giữa doanh nghiệp và những đối tác phù hợp.",
      },
      {
        title: "Chia sẻ nguồn lực",
        text: "Tạo môi trường để cộng đồng trao đổi thông tin, kiến thức và cơ hội kinh doanh.",
      },
    ],
  },
  {
    slug: "matrix-ventures",
    headline: "Đồng hành cùng những ý tưởng có tiềm năng.",
    focus: "Kết nối đầu tư",
    introduction:
      "Matrix Ventures giữ vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư. Đây là một phần trong định hướng phát triển hệ sinh thái, giúp những ý tưởng và doanh nghiệp tiềm năng có thêm cơ hội tiếp cận mạng lưới đầu tư.",
    capabilities: [
      {
        title: "Cộng đồng đầu tư",
        text: "Kết nối các thành viên quan tâm đến đầu tư và phát triển doanh nghiệp.",
      },
      {
        title: "Ý tưởng kinh doanh",
        text: "Tạo không gian trao đổi về mô hình kinh doanh và định hướng phát triển.",
      },
      {
        title: "Cơ hội đồng hành",
        text: "Thúc đẩy đối thoại giữa các doanh nghiệp tiềm năng và cộng đồng trong hệ sinh thái.",
      },
    ],
  },
  {
    slug: "matrix-academy",
    headline: "Phát triển năng lực. Kiến tạo tương lai.",
    focus: "Đào tạo tinh hoa",
    introduction:
      "Matrix Academy phát triển hoạt động đào tạo kỹ năng, quản trị và năng lực thực thi cho đội ngũ trong hệ sinh thái.",
    capabilities: [
      { title: "Kỹ năng", text: "Đào tạo kỹ năng và phát triển năng lực cho đội ngũ." },
      { title: "Quản trị", text: "Đào tạo kiến thức quản trị doanh nghiệp." },
      {
        title: "Năng lực thực thi",
        text: "Phát triển khả năng ứng dụng kiến thức vào hoạt động thực tế.",
      },
    ],
  },
];

export const ecosystemDetails = ecosystemContent.map((details, index) => {
  const item = ecosystem[index];
  if (!item) throw new Error("Thiếu dữ liệu đơn vị trong hệ sinh thái");
  return { ...item, ...details };
});

export const newsArticles = referenceNews;

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Matrix Holding` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Matrix Holding` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  };
}
