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
          Khóa Thiết Kế Rập và May Váy Cưới, Dạ Hội, Áo Dài Nâng Cao.
        </h1>
        <Box
          sx={{ width: "100%", m: "auto" }}
          className="basic-lesson-container"
        >
          <Grid2 container>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Phần 1: Thiết Kế Rập Nâng Cao </h2>
                <h3>Buổi 1-2</h3>
                <p>
                  • Giới thiệu về thiết kế rập nâng cao: Phân tích cấu trúc và
                  sự khác biệt giữa các loại váy cưới, dạ hội, và áo dài.
                </p>
                <p>
                  • Các kỹ thuật rập 3D, tạo phom và đường cắt nâng cao, sử dụng
                  phần mềm hỗ trợ thiết kế (nếu có).
                </p>
                <h3>Buổi 3-5</h3>
                <p>
                  • Giới thiệu về thiết kế rập nâng cao: Phân tích cấu trúc và
                  sự khác biệt giữa các loại váy cưới, dạ hội, và áo dài.
                </p>
                <p>
                  • Cắt rập cho váy cưới có cấu trúc phức tạp: áo choàng, váy
                  xòe, váy phồng.
                </p>
                <h3>Buổi 6-8</h3>
                <p>
                  • Phân tích và thiết kế rập cho váy dạ hội sang trọng với các
                  đường cắt táo bạo và cắt xẻ.
                </p>
                <p>
                  • Cắt rập cho váy cưới có cấu trúc phức tạp: áo choàng, váy
                  xòe, váy phồng.
                </p>
                <h3>Buổi 9-11</h3>
                <p>
                  • Thiết kế rập cho áo dài cách tân và áo dài truyền thống với
                  các chi tiết đặc biệt.
                </p>
                <p>
                  • Tạo dáng áo dài vừa vặn với các đường cắt hiện đại và cổ áo
                  ấn tượng.
                </p>

                <h3>Buổi 12-13</h3>
                <p>
                  • Học cách chỉnh sửa, điều chỉnh lại rập để đảm bảo trang phục
                  vừa vặn với người mặc.
                </p>
                <p>
                  • Thực hành chỉnh sửa phom dáng, điều chỉnh chiều dài, kích
                  thước vải cho sản phẩm cuối cùng.
                </p>

                <h3>Buổi 14-15</h3>
                <p>
                  • Kỹ thuật dựng phom cho các trang phục có chi tiết cầu kỳ như
                  váy cưới với chi tiết thêu, đính cườm, ren.
                </p>
                <p>
                  • Học cách kết hợp các yếu tố trong thiết kế rập như vải ren,
                  lưới, voan để tạo ra sản phẩm độc đáo.
                </p>

                <h3>Buổi 16-18</h3>
                <p>
                  • Tạo các rập cho váy cưới, dạ hội với các chi tiết tay áo, cổ
                  áo phức tạp.
                </p>
                <p>• Hướng dẫn tạo rập tay áo cho váy cưới dài và áo dài.</p>

                <h3>Buổi 19-20</h3>
                <p>
                  • Cách tạo rập cho váy cưới nhiều tầng, áo dài dài và các kiểu
                  thiết kế đặc biệt.
                </p>
                <p>• Thực hành chỉnh sửa và thử nghiệm các rập đã tạo ra.</p>
              </Box>
            </Grid2>
            {matches ? (
              ""
            ) : (
              <Grid2 size={{ md: 6, xs: 12 }}>
                <img
                  src="https://storage.googleapis.com/luyen-wedding-academy-bucket/decor-course/1.jpg"
                  alt="img"
                />
              </Grid2>
            )}
            <Grid2 size={{ md: 6, xs: 12 }}>
              <img
                src="https://storage.googleapis.com/luyen-wedding-academy-bucket/decor-course/2.jpg"
                alt="img"
              />
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Phần 2: Kỹ Thuật May Nâng Cao </h2>

                <h3>Buổi 21-23</h3>
                <p>
                  • Hướng dẫn kỹ thuật may váy cưới với các lớp vải chồng lên
                  nhau (lớp lưới, satin, tulle).
                </p>
                <p>
                  • Thực hành may phần vải chi tiết như đuôi váy, thân trên váy
                  cưới.
                </p>

                <h3>Buổi 24-26</h3>
                <p>
                  • Kỹ thuật may các chi tiết đặc biệt như đính kết đá, cườm, và
                  ren lên váy cưới.
                </p>
                <p>
                  • Thực hành may áo dạ hội với các đường may ôm sát và tôn dáng
                  người mặc.
                </p>

                <h3>Buổi 27-29</h3>
                <p>
                  • Tạo phom cho váy dạ hội xòe, váy dạ hội dài với những đường
                  may chi tiết.
                </p>
                <p>
                  • Cách sử dụng vải cứng và vải mềm để tạo độ phồng cho váy dạ
                  hội.
                </p>

                <h3>Buổi 30-32</h3>
                <p>
                  • May các chi tiết trang trí cao cấp cho váy cưới như nơ, đính
                  hạt ngọc, đính ren.
                </p>
                <p>• Thực hành may các đường cắt xẻ cho váy dạ hội.</p>

                <h3>Buổi 33-35</h3>
                <p>• Kỹ thuật may áo dài với tay áo dài và tà áo thướt tha.</p>
                <p>
                  • Sử dụng vải lụa, taffeta để tạo ra sự mềm mại và sang trọng
                  cho áo dài.
                </p>

                <h3>Buổi 36-38</h3>
                <p>
                  • Cách may chi tiết phức tạp cho váy cưới, dạ hội như tạo độ
                  bồng bềnh, tạo lớp vải xếp ly.
                </p>
                <p>
                  • Thực hành làm khối cho áo dài và váy dạ hội với các chi tiết
                  cầu kỳ.
                </p>

                <h3>Buổi 39-40</h3>
                <p>
                  • Kỹ thuật may vải mỏng như voan, chiffon cho váy cưới và áo
                  dài.
                </p>
                <p>
                  • Hướng dẫn may các đường may vô hình và may chi tiết với các
                  vải đắt tiền.
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Phần 3: Đính Kết, Làm Bông 3D và Trang Trí </h2>

                <h3>Buổi 41-43</h3>
                <p>
                  • Học các kỹ thuật đính kết nâng cao: đính hoa 3D, đính cườm,
                  đá pha lê, hạt ngọc trai lên váy cưới và dạ hội.
                </p>
                <p>
                  • Làm quen với các công cụ đính kết chuyên dụng và kỹ thuật
                  trang trí.
                </p>

                <h3>Buổi 44-46</h3>
                <p>
                  • Thực hành tạo hoa 3D bằng vải satin, tulle, voan để trang
                  trí cho váy cưới và dạ hội.
                </p>
                <p>• Hướng dẫn đính kết hoa 3D lên áo dài.</p>

                <h3>Buổi 47-49</h3>
                <p>
                  • Kỹ thuật đính kết các chi tiết ngọc trai, đá pha lê cho váy
                  cưới và dạ hội.
                </p>
                <p>• Thực hành làm nơ 3D và các chi tiết trang trí phức tạp.</p>

                <h3>Buổi 50-52</h3>
                <p>• Cách tạo hình bông hoa 3D từ vải lụa và vải ren.</p>
                <p>• Đính kết bông hoa 3D lên váy cưới, áo dài và dạ hội.</p>

                <h3>Buổi 53-55</h3>
                <p>
                  • Sử dụng các kỹ thuật đính kết để tạo điểm nhấn cho trang
                  phục (như hoa văn, họa tiết, lông vũ).
                </p>
                <p>
                  • Thực hành trang trí với các phụ kiện như dây chuyền, kẹp
                  tóc, nhẫn cài váy.
                </p>

                <h3>Buổi 56-58</h3>
                <p>
                  • Thiết kế các bộ váy cưới, dạ hội với đính kết và hoa 3D đặc
                  biệt.
                </p>
                <p>
                  • Lắp ráp các chi tiết trang trí hoàn chỉnh cho bộ váy cưới
                  hoặc dạ hội.
                </p>

                <h3>Buổi 59-60</h3>
                <p>
                  • Thực hành các bước đính kết hoàn thiện bộ trang phục từ bắt
                  đầu đến kết thúc.
                </p>
                <p>• Tạo mẫu hoàn chỉnh với các chi tiết trang trí.</p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <img
                src="https://storage.googleapis.com/luyen-wedding-academy-bucket/decor-course/3.jpg"
                alt="img"
              />
            </Grid2>
            {matches ? (
              ""
            ) : (
              <Grid2 size={{ md: 6, xs: 12 }}>
                <img
                  src="https://storage.googleapis.com/luyen-wedding-academy-bucket/decor-course/4.jpg"
                  alt="img"
                />
              </Grid2>
            )}
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Phần 4: Thực Hành Dự Án và Hoàn Thiện </h2>

                <h3>Buổi 61-63</h3>
                <p>
                  • Dự án cá nhân: Học viên tự chọn mẫu váy cưới, dạ hội hoặc áo
                  dài để thiết kế và may từ rập, tạo dáng, đính kết.
                </p>
                <p>
                  • Giám sát và hỗ trợ kỹ thuật trong suốt quá trình thực hiện.
                </p>

                <h3>Buổi 64-66</h3>
                <p>
                  • Thực hành hoàn thiện bộ váy dạ hội phức tạp hoặc váy cưới có
                  nhiều chi tiết trang trí, đính kết.
                </p>
                <p>
                  • Lên kế hoạch và thực hiện từ rập đến sản phẩm hoàn chỉnh.
                </p>

                <h3>Buổi 67-69</h3>
                <p>
                  • Hoàn thiện bộ sưu tập cá nhân với các mẫu váy cưới, dạ hội,
                  áo dài đã được may và trang trí.
                </p>
                <p>
                  • Tư vấn về cách trình bày bộ sưu tập, tạo dựng thương hiệu cá
                  nhân.
                </p>

                <h3>Buổi 70</h3>
                <p>• Tổng kết khóa học, trình bày sản phẩm cuối cùng.</p>
                <p>• Nhận xét và chứng nhận hoàn thành khóa học.</p>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Box className="result-after-course">
          <h2>KẾT QUẢ ĐẶT ĐƯỢC SAU KHÓA HỌC</h2>
          <Box sx={{ m: "auto" }}>
            <p>
              Học viên sẽ có thể tự tin thiết kế và may các bộ váy cưới, dạ hội,
              áo dài cao cấp với các chi tiết trang trí tinh tế và các kỹ thuật
              đính kết nâng cao. Khóa học giúp học viên chuẩn bị kỹ năng vững
              vàng để phát triển sự nghiệp trong ngành thiết kế thời trang cao
              cấp.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
