import { Box, Grid2, useMediaQuery } from "@mui/material";

export default function AllLesson() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box
      sx={{
        color: "black",
        fontFamily: "mali",
      }}
    >
      <Box
        sx={{
          clipPath: `polygon(0 90%, 100% 0%, 100% 100%, 0% 100%)`,
          height: `${matches ? "14vh" : "25vh"}`,
          backgroundColor: "white",
        }}
      ></Box>
      <Box sx={{ backgroundColor: "white", pb: 10 }}>
        <h1 style={{ marginLeft: `${matches ? "10vw" : "25vw"}` }}>
          Khóa Học Trang Trí Đính Kết, Làm Bông 3D, Đắp Ren.
        </h1>
        <Box
          sx={{ width: "100%", m: "auto" }}
          className="basic-lesson-container"
        >
          <Grid2 container>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Phần 1: Kiến Thức Cơ Bản Về Đính Kết và Đắp Ren </h2>
                <h3>Buổi 1</h3>
                <p>
                  • Giới thiệu tổng quan về kỹ thuật đính kết và đắp ren trong
                  thời trang.
                </p>
                <p>• Các loại ren cơ bản và dụng cụ đính kết.</p>
                <h3>Buổi 2</h3>
                <p>• Cách chọn chất liệu ren phù hợp với từng thiết kế.</p>
                <p>• Phương pháp xử lý ren để tránh nhăn và rách.</p>
                <h3>Buổi 3</h3>
                <p>• Cách chọn chất liệu ren phù hợp với từng thiết kế.</p>
                <p>• Phương pháp xử lý ren để tránh nhăn và rách.</p>
                <h3>Buổi 4</h3>
                <p>• Cách chọn chất liệu ren phù hợp với từng thiết kế.</p>
                <p>• Phương pháp xử lý ren để tránh nhăn và rách.</p>
                <h3>Buổi 5</h3>
                <p>• Cách chọn chất liệu ren phù hợp với từng thiết kế.</p>
                <p>• Phương pháp xử lý ren để tránh nhăn và rách.</p>
                <h3>Buổi 6</h3>
                <p>• Cách chọn chất liệu ren phù hợp với từng thiết kế.</p>
                <p>• Phương pháp xử lý ren để tránh nhăn và rách.</p>
              </Box>
            </Grid2>
            {matches ? (
              ""
            ) : (
              <Grid2 size={{ md: 6, xs: 12 }}>
                <img
                  src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/nang-cao-course/2.jpg"
                  alt="img"
                />
              </Grid2>
            )}
            <Grid2 size={{ md: 6, xs: 12 }}>
              <img
                src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/nang-cao-course/1.jpg"
                alt="img"
              />
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Phần 2: Kỹ Thuật Làm Bông 3D </h2>
                <h3>Buổi 11</h3>
                <p>
                  • Giới thiệu về kỹ thuật tạo hình bông hoa 3D: các loại hoa cơ
                  bản (hoa hồng, hoa cúc).
                </p>
                <p>• Dụng cụ và vật liệu cần thiết để làm bông 3D.</p>
                <h3>Buổi 12</h3>
                <p>• Kỹ thuật tạo hình cánh hoa bằng nhiệt và khuôn.</p>
                <p>• Thực hành làm bông hoa cơ bản (hoa hồng, hoa nhài).</p>
                <h3>Buổi 13</h3>
                <p>
                  • Làm bông hoa 3D từ các chất liệu vải như lụa, ren, voan.
                </p>
                <p>• Thực hành tạo hình hoa 3D từ lụa cho trang phục dạ hội.</p>
                <h3>Buổi 14</h3>
                <p>• Hướng dẫn làm bông hoa 3D từ chất liệu giấy.</p>
                <p>• Thực hành làm hoa 3D từ giấy để trang trí phụ kiện.</p>
                <h3>Buổi 15</h3>
                <p>
                  • Kỹ thuật làm hoa nhỏ và đính lên trang phục như váy cưới và
                  áo dài.
                </p>
                <p>• Thực hành đính bông hoa nhỏ lên váy cưới.</p>
                <h3>Buổi 16</h3>
                <p>• Học cách làm bông hoa lớn từ chất liệu voan và lụa.</p>
                <p>
                  • Thực hành tạo bông hoa lớn làm điểm nhấn cho trang phục dạ
                  hội.
                </p>
                <h3>Buổi 17</h3>
                <p>
                  • Cách làm bông hoa 3D có thể chuyển động (cánh hoa xoay hoặc
                  lắc).
                </p>
                <p>• Thực hành làm hoa 3D với chuyển động cho váy cưới.</p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Phần 3: Ứng Dụng Thực Tế và Sáng Tạo </h2>
                <h3>Buổi 21</h3>
                <p>
                  • Phối hợp kỹ thuật đính kết và bông hoa 3D trên trang phục dạ
                  hội.
                </p>
                <p>• Thực hành làm bông hoa 3D và đính kết cho váy dạ hội.</p>
                <h3>Buổi 22</h3>
                <p>• Phối hợp ren và bông hoa 3D trên áo dài.</p>
                <p>• Thực hành tạo hình bông hoa và đính kết lên áo dài.</p>
                <h3>Buổi 23</h3>
                <p>
                  • Tạo bông hoa 3D để trang trí phụ kiện (kẹp tóc, vòng cổ, túi
                  xách).
                </p>
                <p>• Thực hành đính kết và làm bông hoa 3D cho phụ kiện.</p>
                <h3>Buổi 24</h3>
                <p>
                  • Kỹ thuật kết hợp các yếu tố trang trí: đính kết và bông hoa
                  3D.
                </p>
                <p>• Thực hành làm hoa 3D từ giấy để trang trí phụ kiện.</p>
                <h3>Buổi 25</h3>
                <p>
                  • Thiết kế một bộ sưu tập nhỏ với các mẫu trang phục đính kết
                  và hoa 3D.
                </p>
                <p>• Hướng dẫn phát triển ý tưởng thiết kế.</p>
                <h3>Buổi 26</h3>
                <p>
                  • Cách gắn hoa 3D và đính kết lên các chi tiết như vai, tay
                  áo, cổ áo.
                </p>
                <p>• Thực hành gắn chi tiết lên sản phẩm thực tế.</p>

                <h3>Buổi 27</h3>
                <p>
                  • Tạo bông hoa 3D có hiệu ứng nổi bật, sử dụng vật liệu như
                  nhựa mềm và satin.
                </p>
                <p>
                  • Thực hành làm bông hoa 3D nổi bật cho các bộ trang phục cao
                  cấp.
                </p>

                <h3>Buổi 28</h3>
                <p>
                  • Phối hợp các mẫu bông hoa 3D với họa tiết đính kết để tạo
                  nên sự cân đối và hài hòa.
                </p>
                <p>
                  • Thực hành tạo điểm nhấn trên váy cưới và trang phục dạ hội.
                </p>

                <h3>Buổi 29</h3>
                <p>
                  • Hướng dẫn hoàn thiện thiết kế và kết hợp hoa 3D với các yếu
                  tố khác như vải, cườm.
                </p>
                <p>• Thực hành hoàn thiện bộ sưu tập.</p>

                <h3>Buổi 30</h3>
                <p>• Tổng kết và đánh giá sản phẩm của học viên.</p>
                <p>
                  • Trưng bày sản phẩm và nhận chứng nhận hoàn thành khóa học.
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <img
                src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/nang-cao-course/3.jpg"
                alt="img"
              />
            </Grid2>
            {matches ? (
              ""
            ) : (
              <Grid2 size={{ md: 6, xs: 12 }}>
                <img
                  src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/nang-cao-course/4.jpg"
                  alt="img"
                />
              </Grid2>
            )}
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Phần 4: Ứng Dụng và Phát Triển Kỹ Năng </h2>

                <h3>Buổi 31-35</h3>
                <p>
                  • Thiết kế và thực hành tạo mẫu trang phục đính kết và hoa 3D
                  theo yêu cầu cá nhân.
                </p>
                <p>
                  • Học viên làm việc trên các thiết kế cá nhân với sự hỗ trợ từ
                  giảng viên.
                </p>

                <h3>Buổi 36-38</h3>
                <p>
                  • Làm bông hoa 3D và đính kết lên các trang phục theo xu hướng
                  thời trang mới nhất.
                </p>
                <p>
                  • Thực hành tạo các mẫu thiết kế xu hướng hiện đại cho váy
                  cưới, dạ hội.
                </p>

                <h3>Buổi 39</h3>
                <p>
                  • Hoàn thiện bộ sưu tập cá nhân và chuẩn bị cho việc ứng dụng
                  vào công việc thực tế.
                </p>
                <p>• Học viên trình bày sản phẩm của mình.</p>

                <h3>Buổi 40</h3>
                <p>• Tổng kết khóa học, đánh giá sản phẩm.</p>
                <p>
                  • Hướng dẫn cách phát triển nghề nghiệp và ứng dụng kỹ thuật
                  vào công việc thực tế.
                </p>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Box className="result-after-course">
          <h2>KẾT QUẢ ĐẶT ĐƯỢC SAU KHÓA HỌC</h2>
          <Box sx={{ m: "auto" }}>
            <p>
              Học viên sẽ thành thạo các kỹ thuật đính kết, đắp ren và tạo hình
              bông hoa 3D, có khả năng ứng dụng vào nhiều loại trang phục và phụ
              kiện cao cấp. Khóa học giúp phát triển kỹ năng sáng tạo và hoàn
              thiện bộ sưu tập cá nhân.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
