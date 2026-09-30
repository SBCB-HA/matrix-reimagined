import { ecosystem, news } from "./home";
import networkImage from "@/assets/matrix-network.jpg";
import connectImage from "@/assets/matrix-connect.jpg";
import venturesImage from "@/assets/matrix-ventures.jpg";

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
];

export const ecosystemDetails = ecosystemContent.map((details, index) => {
  const item = ecosystem[index];
  if (!item) throw new Error("Thiếu dữ liệu đơn vị trong hệ sinh thái");
  return { ...item, ...details };
});

const articleContent = [
  {
    slug: "matrix-holding-he-sinh-thai-kinh-doanh",
    category: "Matrix Holding",
    summary:
      "Tìm hiểu mô hình kết nối dịch vụ, cộng đồng kinh doanh và cộng đồng đầu tư của Matrix Holding.",
    image: venturesImage,
    sections: [
      {
        title: "Một định hướng phát triển chung",
        text: "Matrix Holding hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam. Vai trò của công ty mẹ là quản trị, vận hành và điều phối các hoạt động trong hệ sinh thái.",
      },
      {
        title: "Ba hướng kết nối",
        text: "Matrix Network tập trung vào mạng lưới dịch vụ doanh nghiệp. Matrix Connect phát triển cộng đồng kết nối kinh doanh. Matrix Ventures xây dựng cộng đồng kết nối đầu tư. Mỗi đơn vị đảm nhiệm một vai trò trong định hướng phát triển chung.",
      },
      {
        title: "Cùng doanh nghiệp phát triển",
        text: "Thông qua các đơn vị và cộng đồng, Matrix Holding hướng đến việc tạo điều kiện để doanh nghiệp tiếp cận nguồn lực và cơ hội thị trường. Tìm hiểu thêm từng đơn vị tại trang Hệ sinh thái hoặc liên hệ để trao đổi nhu cầu hợp tác.",
      },
    ],
  },
  {
    slug: "matrix-network-dich-vu-doanh-nghiep",
    category: "Hệ sinh thái",
    summary:
      "Vai trò của Matrix Network trong việc kết nối nguồn lực và các đơn vị cung cấp dịch vụ cho doanh nghiệp.",
    image: networkImage,
    sections: [
      {
        title: "Kết nối nguồn lực chuyên môn",
        text: "Matrix Network là một đơn vị trong hệ sinh thái Matrix Holding, đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp.",
      },
      {
        title: "Xuất phát từ nhu cầu doanh nghiệp",
        text: "Các lĩnh vực được giới thiệu trong mạng lưới gồm chiến lược, nghiên cứu, pháp lý, tài chính và kế toán. Việc trao đổi nhu cầu cụ thể giúp doanh nghiệp xác định hướng kết nối phù hợp.",
      },
      {
        title: "Tìm hiểu cơ hội hợp tác",
        text: "Doanh nghiệp có thể gửi thông tin về lĩnh vực hoạt động và nhu cầu kết nối tới Matrix Holding để bắt đầu trao đổi. Các nội dung hợp tác cần được thống nhất trực tiếp với đơn vị liên quan.",
      },
    ],
  },
  {
    slug: "matrix-capital-ket-noi-dau-tu",
    category: "Kết nối đầu tư",
    summary: "Một góc nhìn về vai trò của cộng đồng kết nối đầu tư trong hệ sinh thái kinh doanh.",
    image: venturesImage,
    sections: [
      {
        title: "Không gian trao đổi về đầu tư",
        text: "Cộng đồng kết nối đầu tư là một trong những hướng phát triển được giới thiệu trong hệ sinh thái Matrix Holding. Mục tiêu là tạo môi trường trao đổi giữa những người quan tâm đến đầu tư và phát triển doanh nghiệp.",
      },
      {
        title: "Vai trò trong hệ sinh thái",
        text: "Trong cấu trúc đang được giới thiệu, Matrix Ventures đảm nhiệm việc xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư. Doanh nghiệp có thể tìm hiểu thêm tại trang chi tiết Matrix Ventures.",
      },
      {
        title: "Bắt đầu từ đối thoại",
        text: "Để trao đổi về một ý tưởng hoặc nhu cầu kết nối, hãy giới thiệu lĩnh vực hoạt động, mục tiêu và thông tin liên hệ của bạn. Nội dung trên website cung cấp thông tin giới thiệu; các điều kiện hợp tác được trao đổi trực tiếp.",
      },
    ],
  },
  {
    slug: "matrix-community-ket-noi-kinh-doanh",
    category: "Cộng đồng",
    summary: "Kết nối doanh nghiệp thông qua chia sẻ kinh nghiệm, nguồn lực và cơ hội hợp tác.",
    image: connectImage,
    sections: [
      {
        title: "Giá trị của cộng đồng",
        text: "Một cộng đồng kinh doanh tạo không gian để doanh nghiệp trao đổi kiến thức, chia sẻ kinh nghiệm và tìm kiếm các mối quan hệ hợp tác phù hợp.",
      },
      {
        title: "Kết nối trong hệ sinh thái Matrix",
        text: "Matrix Connect đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh trong hệ sinh thái Matrix Holding.",
      },
      {
        title: "Từ kết nối đến hợp tác",
        text: "Mỗi cuộc trao đổi có thể bắt đầu từ một nhu cầu cụ thể: tìm đối tác, chia sẻ nguồn lực hoặc tìm hiểu một lĩnh vực mới. Liên hệ Matrix Holding để giới thiệu doanh nghiệp và nhu cầu kết nối của bạn.",
      },
    ],
  },
];

// Nội dung giới thiệu được biên soạn từ dữ liệu trong project.
// Đối chiếu với bản bài viết chính thức trước khi xuất bản.
export const newsArticles = articleContent.map((details, index) => {
  const item = news[index];
  if (!item) throw new Error("Thiếu dữ liệu bài viết");
  return { ...item, ...details };
});

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
