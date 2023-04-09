import React from "react";
import Box from "../Components/Box";
import BoxList from "../Components/BoxList";
import ListItem from "../Components/ListItem";

const Services = () => {
  return (
   <div >
    <div className="bg-[url(https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/mau-background.jpg)] bg-no-repeat w-full h-full bg-cover">
    <div className="max-w-[1440px] mx-auto p-20 loading">
     <h1 className="text-[#002662] text-4xl font-bold">
        Our accounting services
      </h1>
      <div className="flex flex-wrap gap-10 max-w-[1100px] mx-auto items-center justify-center my-10">
        <Box
          heading={"Dịch vụ kế toán thuế"}
          content={
            "Mục tiêu của chúng tôi là Không còn nỗi lo kế toán thuế. Với đội ngũ kế toán giỏi, tận tâm, nhiều kinh nghiệm trong mọi loại hình sản xuất kinh doanh, thương mại, xây dựng… sẽ trợ giúp quý doanh nghiệp đạt được mục tiêu này."
          }
        ></Box>
        <Box
          heading={"Dịch vụ kiểm toán"}
          content={
            "Với các dịch vụ: Dịch vụ kiểm toán báo cáo tài chính, kiểm toán nội bộ, kiểm toán thuế,… NAS cam kết mang lại hiệu quả cho khách hang. Chúng tôi là Người bảo vệ, tránh thất thoát tài chính Doanh Nghiệp và góp phần làm minh bạch nền tài chính Việt Nam."
          }
        ></Box>
        <Box
          heading={"Dịch vụ báo cáo thuế"}
          content={
            "Các cố vấn và chuyên gia thuế có chuyên môn sâu rộng cùng khả năng phân tích nhạy bén sẽ đưa ra các giải pháp toàn diện. Nhờ đó, Doanh Nghiệp vận dụng một cách chính xác, hiệu quả Luật Thuế, giúp giảm thiểu rủi ro về nghĩa vụ Thuế."
          }
        ></Box>
        <Box
          heading={"Dịch vụ chuyển giá, lập hồ sơ giao dịch liên kết"}
          content={
            "Lập báo cáo chuyển giá, báo cáo giao dịch liên kết – Transfer Pricing chính xác, đảm bảo lợi ích cho doanh nghiệp. chúng tôi đại diện, hỗ trợ Quý Doanh nghiệp trong công tác thanh tra Chuyển giá."
          }
        ></Box>
        <Box
          heading={"Dịch vụ giấy chứng nhận đầu tư"}
          content={
            "Với kinh nghiệm chuyên sâu và từng làm việc với nhiều nhà đầu tư trong, ngoài nước, NAS sẽ giúp Quý Doanh nghiệp tiết kiệm tối đa chi phí với quy trình được đơn giản hóa."
          }
        ></Box>
        <Box
          heading={"Dịch vụ Giấy chứng nhận đăng kí Kinh Doanh"}
          content={
            "Quy trình nhanh chóng, khép kín trọn gói bao gồm: Soạn hồ sơ, Trình khách hang ký, Nộp hồ sơ, Nhận Giấy chứng nhận kinh doanh và tiến hành bàn giao."
          }
        ></Box>
        <Box
          heading={"Dịch vụ giấy phép lao động"}
          content={
            "Dịch vụ tư vấn và xin cấp mới, làm giấy phép lao động cho người nước ngoài được thực hiện nhanh chóng và hiệu quả nhất. Đặc biệt hiệu quả với những trường hợp khó khăn về thủ tục."
          }
        ></Box>
        <Box
          heading={"Dịch vụ tư vấn hoạt động Doanh Nghiệp"}
          content={
            "Nhằm mang lại hiệu quả tối đa, NAS sẽ đồng hành cùng Doanh Nghiệp từ việc Hoạch định chiến lược, Tổ chức thực hiện, Tổ chức hệ thống kiểm soát nội bộ, Giám sát đánh giá hiệu quả hoạt động."
          }
        ></Box>
        <Box
          heading={"Dịch vụ tài chính – Kế toán"}
          content={
            "NAS cung cấp các dịch vụ như: Thẩm định Doanh Nghiệp (Due-Diligence), Thẩm định Tài chính – Kế toán – Thuế, Tư vấn tổ chức bộ máy và nhân sự kế toán, tư vấn nguồn vốn tín dụng"
          }
        ></Box>
      </div>
     </div>
    </div>
    <div className="bg-[url(https://sackim.com/wp-content/uploads/2020/01/4.jpg)] bg-no-repeat bg-cover">
        <div className="max-w-[1440px] mx-auto p-20 loading2">
        <div className="flex text-[#002662] items-start justify-between p-5 ">
        <div className="max-w-[400px] ">
          <h1 className="font-bold text-6xl">Tại sao chọn chúng tôi</h1>
          <p className="p-5 text-justify text-xl">
            NAS tự hào khi mang đến các giá trị lợi ích cho doanh nghiệp bằng
            những dịch vụ thiết thực và chuyên nghiệp. Qua đó, chúng tôi góp
            phần thúc đẩy ngành tài chính kế toán, kiểm toán, thuế đi lên theo
            hướng tốt đẹp để phục vụ xã hội, góp phần trong sự phát triển nền
            kinh tế của đất nước.
          </p>
        </div>
        <div className="flex flex-col gap-10">
            <BoxList heading={"Điểm mạnh của công ty"}>
                <ListItem>Đội ngũ nhân viên có trình độ chuyên môn cao và nhiệt tình, tận tâm</ListItem>
                <ListItem>Thực thi theo đúng quy định của pháp luật</ListItem>
                <ListItem>Tuyệt đối bảo mật tất cả thông tin của doanh nghiệp</ListItem>
                <ListItem>Thực hiện và hoàng thành công việc theo đúng thời hạn</ListItem>
                <ListItem>Hỗ trợ doanh nghiệp nhanh chóng và kịp thời các vấn đề liên quan đến quá trình hoạt động</ListItem>
                <ListItem>Chi phí tối ưu hợp lý với khối lượng công việc</ListItem>
            </BoxList>
            <BoxList heading={"Quy trình triển khai các dịch vụ"}>
                <ListItem>Tiếp nhận thông tin từ khách hàng</ListItem>
                <ListItem>Tìm hiểu khách hàng</ListItem>
                <ListItem>Trao đổi với khách hàng</ListItem>
                <ListItem>Xây dựng giải pháp, giá trị cho khách hàng </ListItem>
                <ListItem>Báo giá dịch vụ theo yêu cầu của khách hàng</ListItem>
                <ListItem>Ký hợp đồng, thỏa thuận</ListItem>
                <ListItem>Triển khai thực hiện công việc</ListItem>
                <ListItem>Giao báo cáo kiểm toán và kết quả công việc</ListItem>
                <ListItem>Thanh lý hợp đồng, kết thúc công việc và tư vấn, hỗ trợ khách hàng sau công việc</ListItem>
            </BoxList>
        </div>
      </div>
        </div>
    </div>
      </div>
  );
};

export default Services;
