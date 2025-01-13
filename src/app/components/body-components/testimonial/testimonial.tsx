import { Box, Grid2, useMediaQuery } from "@mui/material";

export default function Testimonial() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box>
      <Box className="testimonial">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
          }}
        >
          <h1
            style={{
              fontFamily: "Mali",
              margin: "auto",
              color: "white",
              backgroundColor: "#f01267",
              fontSize: `${matches ? "1rem" : ""}`,
              padding: `${matches ? "1rem 0 1rem 0" : "2rem 0 2rem 0"}`,
              width: "100%",
              textAlign: "center",
            }}
          >
            HỌC VIÊN NGHĨ GÌ VỀ LUYẾN ACADEMY
          </h1>
          <Box>
            <Grid2 container>
              <Grid2 size={{ md: 4, xs: 6 }} className="testimonial-container">
                <div className="testimonial-image-container">
                  <img
                    src="https://storage.googleapis.com/luyen-wedding-academy-bucket/testimonial/Quoc_an.jpg"
                    alt="image"
                  />
                </div>
                <Box className="testimonial-text">
                  <img
                    src="https://www.svgrepo.com/show/517628/lyne.svg"
                    alt="symbol"
                  />
                  <p
                    style={{
                      width: `${matches ? "80%" : "70%"}`,
                      fontSize: `${matches ? "0.8rem" : "1.2rem"}`,
                    }}
                  >
                    Sau khi được đi thực tập ở Luyến Academy, tôi cảm thấy học
                    được rất nhiều thứ từ công việc kể cả các bài học về cuộc
                    sống. Tôi thực sự rất thích được làm việc ở môi trường này.
                  </p>
                  <p style={{ fontWeight: 600, marginTop: "1rem" }}>
                    --Quốc An--
                  </p>
                </Box>
              </Grid2>
              <Grid2 size={{ md: 4, xs: 6 }} className="testimonial-container">
                <Box className="testimonial-text">
                  <img
                    src="https://www.svgrepo.com/show/518072/myntra.svg"
                    alt="symbol"
                  />
                  <p
                    style={{
                      width: `${matches ? "80%" : "70%"}`,
                      fontSize: `${matches ? "0.8rem" : "1.2rem"}`,
                    }}
                  >
                    Cô dạy siêu nhiệt tình ạ. Cô giải đáp thắc mắc tận tình, học
                    ở đây em có thêm nhiều kinh nghiệm về chuyên ngành hơn. Cảm
                    ơn cô đã tạo điều kiện và cho em cơ hội được thực tập tại
                    đây ạ. 💋💋💋❤️❤️❤️
                  </p>
                  <p style={{ fontWeight: 600, marginTop: "1rem" }}>
                    --Nguyễn Quỳnh--
                  </p>
                </Box>
                <div className="testimonial-image-container">
                  <img
                    src="https://storage.googleapis.com/luyen-wedding-academy-bucket/testimonial/nguyen_quynh.jpg"
                    alt="image"
                  />
                </div>
              </Grid2>
              <Grid2 size={{ md: 4, xs: 12 }} className="testimonial-container">
                <div className="testimonial-image-container">
                  <img
                    src="https://storage.googleapis.com/luyen-wedding-academy-bucket/testimonial/testiomonial1-%20Phat_Nguyen.jpg"
                    alt="image"
                  />
                </div>
                <Box className="testimonial-text">
                  <img
                    src="https://www.svgrepo.com/show/520452/zalando.svg"
                    alt="symbol"
                  />
                  <p
                    style={{
                      width: `${matches ? "80%" : "70%"}`,
                      fontSize: "1.2rem",
                    }}
                  >
                    Sau khi được thực tập và trải nghiệm tại Luyến Academy, em
                    đã tích lũy được thêm rất nhiều kỹ thuật thiết kế trang phục
                    cao cấp, từ căn bản đến nâng cao. Quan trọng hơn hết, môi
                    trường ở đây rất thân thiện và vui vẻ.
                  </p>
                  <p style={{ fontWeight: 600, marginTop: "1rem" }}>
                    --Phát Nguyễn--
                  </p>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
