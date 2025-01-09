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
          Khóa Thiết Kế Rập và May Cơ Bản Váy Cưới, Dạ Hội, Áo Dài.
        </h1>
        <Box
          sx={{ width: `${matches ? "100%" : "50%"}`, m: "auto" }}
          className="basic-lesson-container"
        >
          <Grid2 container>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Buổi 1</h2>
                <p>
                  Giới thiệu về các mẫu váy cưới hiện đại, xu hướng thời trang
                  cưới, dạ hội, áo dài mới nhất.
                </p>
              </Box>
            </Grid2>
            {matches ? (
              ""
            ) : (
              <Grid2 size={{ md: 6, xs: 12 }}>
                <img
                  src="https://storage.googleapis.com/luyen-wedding-academy-bucket/luyen-academy-pics/product-collection/464048464_122135610632351735_7048512483400802110_n.jpg"
                  alt="img"
                />
              </Grid2>
            )}
            <Grid2 size={{ md: 6, xs: 12 }}>
              <img
                src="https://storage.googleapis.com/luyen-wedding-academy-bucket/luyen-academy-pics/product-collection/464316107_122135743598351735_5721276897516419846_n.jpg"
                alt="img"
              />
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Buổi 2-3</h2>
                <p>
                  Cách đo người, tính toán số đo chuẩn xác để tạo ra những chiếc
                  váy vừa vặn.
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Buổi 4-6</h2>
                <p>
                  Kỹ thuật vẽ rập, thiết kế mẫu váy, chuyển họa tiết 2D lên 3D.
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <img
                src="https://storage.googleapis.com/luyen-wedding-academy-bucket/luyen-academy-pics/product-collection/471205009_122145108092351735_7491170319897941532_n.jpg"
                alt="img"
              />
            </Grid2>
            {matches ? (
              ""
            ) : (
              <Grid2 size={{ md: 6, xs: 12 }}>
                <img
                  src="https://storage.googleapis.com/luyen-wedding-academy-bucket/luyen-academy-pics/product-collection/4.jpg"
                  alt="img"
                />
              </Grid2>
            )}
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Buổi 7-9</h2>
                <p>
                  Kỹ thuật may cơ bản, các đường may thông dụng trong may váy
                  cưới, dạ hội, áo dài.
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Buổi 10-19</h2>
                <p>
                  Tập trung vào kỹ thuật may lót váy, tùng váy cưới, dạ hội, áo
                  dài.
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <img
                src="https://storage.googleapis.com/luyen-wedding-academy-bucket/luyen-academy-pics/product-collection/2.jpg"
                alt="img"
              />
            </Grid2>
            {matches ? (
              ""
            ) : (
              <Grid2 size={{ md: 6, xs: 12 }}>
                <img
                  src="https://storage.googleapis.com/luyen-wedding-academy-bucket/luyen-academy-pics/product-collection/456949170_2290429257961210_1929929787179117232_n.jpg"
                  alt="img"
                />
              </Grid2>
            )}
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Buổi 20-35</h2>
                <p>
                  Thực hành may thân váy, ráp tùng và thân váy, kỹ thuật may dây
                  kéo.
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="basic-lesson">
                <h2>Buổi 36-40</h2>
                <p>
                  Hướng dẫn bí quyết tạo lên những phom dáng áo chuẩn, hợp thời
                  trang và cách tư vấn khách hàng, chốt sale hiệu quả.
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <img
                src="https://storage.googleapis.com/luyen-wedding-academy-bucket/luyen-academy-pics/product-collection/471132921_122145107948351735_3348126933673112272_n.jpg"
                alt="img"
              />
            </Grid2>
          </Grid2>
        </Box>
        <Box className="result-after-course">
          <h2>KẾT QUẢ ĐẶT ĐƯỢC SAU KHÓA HỌC</h2>
          <Box sx={{ m: "auto" }}>
            <p>• Nắm vững các kỹ năng may váy cưới từ cơ bản đến nâng cao.</p>
            <p>
              • Tự tin thiết kế và may những chiếc váy cưới độc đáo theo ý tưởng
              riêng.
            </p>
            <p>
              • Mở ra cơ hội kinh doanh thời trang cưới hoặc làm việc tại các
              cửa hàng váy cưới.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
