<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <n-breadcrumb>
          <n-breadcrumb-item href="/"> TRANG CHỦ</n-breadcrumb-item>
          <n-breadcrumb-item href="/product-list">
            ĐIỆN THOẠI</n-breadcrumb-item
          >
          <n-breadcrumb-item href="#"> CHI TIẾT SẢN PHẨM</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <section class="products-section-2 section">
      <div class="container">
        <n-grid x-gap="30px" cols="1 m:2" responsive="screen">
          <n-grid-item class="product-detail__left">
            <div class="product-detail__slider">
              <swiper
                :style="{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }"
                :loop="true"
                :navigation="true"
                :slidesPerView="1"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                :watchSlidesProgress="true"
                class="mySwiper2"
              >
                <!-- <swiper-slide
                  v-for="(image, index) in 6"
                  :key="index"
                  class="product-detail-main"
                >
                  <inner-image-zoom
                    src="http://localhost:3000/src/assets/images/color-product-1.png"
                    zoomSrc="http://localhost:3000/src/assets/images/color-product-1-zoom.png"
                    class="product-detail_img"
                  />
                  <img
                    src="../../assets/images/color-product-1.png"
                    alt=""
                    class="product-detail_img_mobile"
                  />
                </swiper-slide> -->
                <swiper-slide v-for="image in imagesList" :key="image">
                  <inner-image-zoom
                    :src="image.src"
                    :zoomSrc="image.zoomSrc"
                    class="product-detail_img"
                  />

                  <img
                    :src="image.src"
                    alt=""
                    class="product-detail_img_mobile"
                  />
                </swiper-slide>
                <!-- <swiper-slide>
                  <inner-image-zoom
                    src="http://localhost:3000/src/assets/images/color-product-1.png"
                    zoomSrc="http://localhost:3000/src/assets/images/color-product-1-zoom.png"
                    class="product-detail_img"
                  />
                  <img
                    src="../../assets/images/color-product-1.png"
                    alt=""
                    class="product-detail_img_mobile"
                  />
                </swiper-slide>
                <swiper-slide>
                  <inner-image-zoom
                    src="http://localhost:3000/src/assets/images/color-product-2.png"
                    zoomSrc="http://localhost:3000/src/assets/images/color-product-2-zoom.png"
                    class="product-detail_img"
                  />
                  <img
                    src="../../assets/images/color-product-2.png"
                    alt=""
                    class="product-detail_img_mobile"
                  />
                </swiper-slide>
                <swiper-slide>
                  <inner-image-zoom
                    src="http://localhost:3000/src/assets/images/color-product-3.png"
                    zoomSrc="http://localhost:3000/src/assets/images/color-product-3-zoom.png"
                    class="product-detail_img"
                  />
                  <img
                    src="../../assets/images/color-product-3.png"
                    alt=""
                    class="product-detail_img_mobile"
                  />
                </swiper-slide> -->
              </swiper>
              <swiper
                loop
                @swiper="setThumbsSwiper"
                :slidesPerView="3"
                :slidesPerGroup="1"
                :pagination="{ clickable: true }"
                :watchSlidesProgress="true"
                :modules="modules"
                :breakpoints="{
                  0: {
                    spaceBetween: 10,
                  },
                  640: {
                    spaceBetween: 26,
                  },
                }"
                class="mySwiper product-detail-thumb"
              >
                <!-- <swiper-slide v-for="(image, index) in 4" :key="index">
                  <div class="ratio-1x1">
                    <img
                      :src="getImageUrl(`color-product-${index}.png`)"
                      alt=""
                    />
                  </div>
                </swiper-slide> -->
                <swiper-slide v-for="image in imagesList" :key="image">
                  <div class="ratio-1x1">
                    <img :src="image.src" alt="" />
                  </div>
                </swiper-slide>
                <!-- <swiper-slide>
                  <div class="ratio-1x1">
                    <img src="../../assets/images/color-product-1.png" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="ratio-1x1">
                    <img src="../../assets/images/color-product-2.png" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="ratio-1x1">
                    <img src="../../assets/images/color-product-3.png" alt="" />
                  </div>
                </swiper-slide> -->
              </swiper>
            </div>
            <div class="product-detail__specifications">
              <div class="specifications__title">
                <p>Thông số kỹ thuật</p>
                <svg
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.125 11.25L5.875 6.5L1.125 1.75"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <n-data-table
                class="table-no_header"
                :data="data"
                :columns="columns"
                :single-line="false"
              />
            </div>
          </n-grid-item>
          <n-grid-item class="product-detail__right">
            <div class="product-detail__title">
              <h1 class="product-detail__type">Điện thoại</h1>
              <h1 class="product-detail__name">
                Apple iPhone 13 Pro Max 128GB
              </h1>
            </div>

            <div class="product-detail__starRating">
              <div class="product-detail__starRating_left">
                <n-rate readonly :default-value="4" />
                <span>100 đánh giá</span>
                <span>So sánh</span>
                <a href="#">
                  <img
                    src="../../assets/images/product-detail-icon.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="product-detail__starRating_right">
                <n-button strong secondary class="btn-like">
                  Thích
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.42059 6.24512H1.35572C1.35572 6.24512 0 6.70647 0 7.87198C0 9.03884 0 12.9441 0 12.9441C0 12.9441 0.190206 14.4091 1.41103 14.4091H3.60851C3.60851 14.4091 4.15079 14.3551 4.42194 14.0287V6.24512H4.42059Z"
                      fill="white"
                    />
                    <path
                      d="M4.96289 6.73357V13.4056C4.96289 13.4056 5.8033 13.813 6.45486 13.813H12.5846C12.5846 13.813 14.1845 13.5149 13.7515 11.9689C13.7515 11.9689 13.6152 11.8057 13.8324 11.6978C13.8324 11.6978 14.7821 11.2634 14.3477 9.93468C14.3477 9.93468 15.7304 8.95803 14.6728 7.65627C14.6728 7.65627 15.8397 5.81222 14.0766 5.13369C14.0766 5.13369 13.8864 5.02577 13.371 5.02577H9.51973C9.51973 5.02577 11.1466 1.55351 8.76025 0.170809C8.76025 0.170809 7.89286 -0.344498 7.02412 0.414974C7.02412 0.414974 6.88788 0.578199 6.9162 0.903302L6.94318 2.69339L4.96289 6.73357Z"
                      fill="white"
                    />
                  </svg>
                </n-button>
                <n-button strong secondary class="btn-share">
                  Chia sẻ
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 15V11.2099C0 11.2099 0.511608 4.32888 7.94464 3.54813V0L15 5.75267L7.94464 11.4786V7.90374C7.9433 7.90374 2.12679 7.74198 0 15Z"
                      fill="white"
                    />
                  </svg>
                </n-button>
              </div>
            </div>
            <div class="product-detail__location">
              <label class="product-detail__title__location">Giá tại:</label>
              <n-dropdown
                trigger="click"
                :options="cityOptions"
                @select="handleSelectCity"
              >
                <n-button>
                  {{ selectedCity }}
                  <svg
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.750001 0.625L4.5 4.375L8.25 0.625"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </n-button>
              </n-dropdown>
            </div>
            <div class="product-detail__price">
              <div>
                <span class="product-detail__price__promotional"
                  >35.900.000 đ
                </span>
                <span class="product-detail__price__old">36.000.000đ</span>
              </div>

              <a href="#" class="product-detail__installment"> Trả góp 0% </a>
            </div>

            <div class="product-detail__memory">
              <p class="product-detail_title">Dung lượng:</p>
              <n-space vertical>
                <n-radio-group
                  v-model:value="memorySelected"
                  name="radiobuttongroup1"
                >
                  <n-radio-button
                    v-for="memory in memoryList"
                    :key="memory.value"
                    :value="memory.value"
                    :label="memory.label"
                    class="radioMemory"
                  />
                </n-radio-group>
              </n-space>
            </div>

            <div class="product-detail__color">
              <p class="product-detail_title">Màu sắc:</p>
              <n-space vertical>
                <n-radio-group
                  v-model:value="colorSelected"
                  name="radiobuttongroup2"
                  class="radioColors"
                >
                  <n-radio-button
                    v-for="color in colorList"
                    :key="color.value"
                    :value="color.value"
                  >
                    <div
                      :style="{
                        width: '20px',
                        height: '20px',
                        backgroundColor: color.value,
                      }"
                    ></div>
                  </n-radio-button>
                </n-radio-group>
              </n-space>
            </div>
            <div class="product-detail__quantity">
              <p class="product-detail_title">Số lượng</p>
              <n-input-group class="quantity__select">
                <n-button @click="quantitySelectDown">-</n-button>
                <n-input
                  placeholder=""
                  readonly=""
                  :value="quantitySelectValue"
                />
                <n-button @click="quantitySelectUp">+</n-button>
              </n-input-group>
            </div>
            <div class="btn-buy__now">
              <a href="/cart">
                <n-button>MUA NGAY</n-button>
              </a>
            </div>
            <div class="btn-add__cart">
              <n-button>THÊM VÀO GIỎ HÀNG</n-button>
            </div>
            <n-card
              class="promotion"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
            >
              <template #header>
                <p>Khuyến mãi trị giá 100.000đ</p>
                <p>Giá và khuyến mãi dự kiến áp dụng đến 23:00 30/11</p>
              </template>
              <div
                class="promotion_content"
                v-for="item in promotionList"
                :key="item.id"
              >
                <p class="promotion_content_tagP">{{ item.id }}</p>
                <div class="promotion_text">
                  <p>{{ item.title }}</p>
                  <a href="#"> Xem ngay </a>
                </div>
              </div>
              <template #footer class="promotion__header">
                (*) Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt
                (0%, 0.5%, 1%)
              </template>
            </n-card>
            <div class="instock">
              <p class="product-detail_title">CÒN HÀNG</p>
              <p class="instock_content">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42399C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42399C13.3679 3.5492 14 5.07533 14 6.66663Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <span>
                  <span class="instock_content_address"
                    >Chọn địa chỉ giao hàng</span
                  >để biết thời gian giao
                </span>
              </p>
              <p class="instock_content">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 1.33337L2 4.00004V13.3334C2 13.687 2.14048 14.0261 2.39052 14.2762C2.64057 14.5262 2.97971 14.6667 3.33333 14.6667H12.6667C13.0203 14.6667 13.3594 14.5262 13.6095 14.2762C13.8595 14.0261 14 13.687 14 13.3334V4.00004L12 1.33337H4Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 4H14"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.6663 6.66663C10.6663 7.37387 10.3854 8.05215 9.88529 8.55224C9.3852 9.05234 8.70692 9.33329 7.99967 9.33329C7.29243 9.33329 6.61415 9.05234 6.11406 8.55224C5.61396 8.05215 5.33301 7.37387 5.33301 6.66663"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span>Xem siêu thị có hàng</span>
              </p>
            </div>
            <div class="payment">
              <p class="product-detail_title">Ưu đãi khi thanh toán</p>
              <div class="payment__promotion">
                <span>Thanh toán qua <b>ZaloPay</b> Giảm <b>500.000 đ</b></span>
                <p class="payment__promotion__tagP">
                  <span>Sản phẩm iphone</span>
                  <span><b>Mua ngay</b></span>
                </p>
              </div>
              <a href="/cart" class="payment__custom_btn_buy_now">
                <n-button strong secondary class="btn_payment-buy-now">
                  MUA NGAY
                </n-button>
              </a>
              <div class="installment">
                <n-button
                  strong
                  secondary
                  class="btn_installment btn_installment-1"
                >
                  Mua trả góp 0% <br />
                  Duyệt hồ sơ trong 5 phút
                </n-button>
                <n-button
                  strong
                  secondary
                  class="btn_installment btn_installment-2"
                >
                  Mua trả góp 0% qua thẻ <br />
                  Visa, Mastercard, JCB, Amex
                </n-button>
              </div>
              <p class="hotline">Gọi đặt mua 1800.1060 (7:30 - 22:00)</p>
              <n-card
                class="insurance"
                :segmented="{
                  content: true,
                  footer: 'soft',
                }"
              >
                <template #header>
                  <p><b>Bảo hành:</b> 12 tháng chính hãng từ apple</p>
                </template>
                <div class="insurance_content">
                  <p><b>Mô tả</b></p>
                  <p>
                    Tai thỏ gọn gàng hơn <br />
                    Tất cả camera đều được hỗ trợ chế độ chụp tối Night Mode và
                    Smart HDR 4. <br />
                    iPhone 13 Pro Max cao hơn 2.5 giờ so với iPhone 12 Pro Max
                    Cổng Lightning <br />
                    Màn hình Super Retina XDR tiết kiệm pin tùy nhu cầu người
                    dùng. Máy chạy chip A15 Bionic, thêm chip đồ họa 5 lõi nên
                    xử lý đồ hoạ tốt hơn <br />
                    4 tùy chọn dung lượng là 128, 256, 512 GB và 1 TB.
                  </p>
                </div>
              </n-card>
            </div>
            <div class="product-detail__specifications__mobile">
              <div class="specifications__title">
                <p>Thông số kỹ thuật</p>
                <svg
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.125 11.25L5.875 6.5L1.125 1.75"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <n-data-table
                class="table-no_header"
                :data="data"
                :columns="columns"
                :single-line="false"
              />
            </div>
          </n-grid-item>
        </n-grid>
        <div class="youtube">
          <iframe
            width="100%"
            height="488"
            src="https://www.youtube.com/embed/k58pt1ZEBn8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="salient-features">
          <div class="salient-features_title">
            <h1>Đặc điểm nổi bật</h1>
            <a href="#">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L7 7L0.999999 1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div class="salient-features_content">
            <p>
              Thiết kế không quá khác biệt nhưng có tai thỏ gọn gàng hơn, màu
              sắc mới iPhone 13 Pro và iPhone 13 Pro Max có thiết kế tổng thể
              không quá khác biệt. Máy vẫn được làm từ hai mặt kính với viền
              thép bo vuông góc giống với thế hệ iPhone 12 Pro trước kia. Cụm
              camera của iPhone 13 Pro có lớn hơn, nhưng không thật sự đáng kể
              và khá khó để nhận ra. Vậy khác biệt trong thiết kế của iPhone 13
              Pro Max ở đâu? Ở mặt trước, phần "tai thỏ" của iPhone 13 Pro đã
              được Apple lần đầu làm gọn gàng hơn kể từ khi ra mắt iPhone X hồi
              năm 2017. Điều này giúp tạo ra thêm một chút không gian hiển thị
              cho thanh trạng thái ở trên cùng.
            </p>
            <n-grid
              x-gap="12"
              cols="2"
              responsive="screen"
              class="salient-features_content_img"
            >
              <n-gi>
                <img
                  class="w-full h-auto"
                  src="../../assets/images/salient-features-1.png"
                  alt=""
                />
              </n-gi>
              <n-gi>
                <img
                  class="w-full h-auto"
                  src="../../assets/images/salient-features-1.png"
                  alt=""
                />
              </n-gi>
            </n-grid>
            <p>
              Màn hình ProMotion với tần số quét 120Hz Sau một thời gian dài chờ
              đợi, cuối cùng iPhone 13 Pro đã được trang bị màn hình tần số quét
              cao 120Hz, hay còn được Apple gọi là "ProMotion". ProMotion giúp
              cho chuyển động trên màn hình được thể hiện mượt mà hơn. Để có
              được tần số quét cao nhưng vẫn tiết kiệm pin, Apple đã ứng dụng
              công nghệ LTPO, giúp cho màn hình của iPhone 13 Pro có thể điều
              chỉnh tần số quét dựa trên nội dung hiển thị.
            </p>
            <img
              class="w-full h-auto salient-features_banner"
              src="../../assets/images/salient-features-2.png"
              alt=""
            />
            <p>
              Một nâng cấp khác của màn hình iPhone 13 Pro là độ sáng cao hơn.
              Các thông số còn lại của màn hình iPhone 13 Pro không đổi, bao gồm
              kích thước 6.1 inch của iPhone 13 Pro và 6.7 inch của iPhone 13
              Pro Max.Chip Apple A15 Bionic mạnh mẽ hơn iPhone 13 Pro và iPhone
              13 Pro Max được trang bị con chip A15 Bionic mới với 2 nhân hiệu
              năng cao, 4 nhân tiết kiệm điện và 5 nhân GPU. Apple cho biết A15
              Bionic là con chip di động mạnh mẽ nhất hiện nay, đem đến hiệu
              năng "nhanh hơn 50%" cả về CPU và GPU.
            </p>
            <div class="review-product">
              <h1>Đánh giá sản phẩm</h1>
              <div class="review-product_title">
                <div>0 Bình luận</div>
                <div class="review-product_title_filter">
                  <span>Mới nhất</span>
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="review-product_rate">
                <span>Xếp hạng sao</span>
                <n-rate size="large" class="custom_rate" />
              </div>
              <div class="review-product_comment">
                <img src="../../assets/images/review-product-1.png" alt="" />
                <n-input
                  class="review-product_input"
                  placeholder="Thêm bình luận ......."
                  type="textarea"
                  size="small"
                  :autosize="{
                    minRows: 3,
                    maxRows: 5,
                  }"
                />
              </div>
              <div class="review-product_group">
                <div class="review-product_social">
                  <!-- <img src="../assets/images/review-product-icon-1.png" alt="" /> -->
                  <svg
                    width="14"
                    height="21"
                    viewBox="0 0 14 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2939 0.921875H9.41158C8.1375 0.921875 6.91561 1.428 6.01471 2.3289C5.1138 3.22981 4.60768 4.4517 4.60768 5.72577V8.60811H1.72534V12.4512H4.60768V20.1375H8.4508V12.4512H11.3331L12.2939 8.60811H8.4508V5.72577C8.4508 5.47096 8.55202 5.22658 8.7322 5.0464C8.91238 4.86622 9.15676 4.76499 9.41158 4.76499H12.2939V0.921875Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <!-- <img
                  src="../assets/images/review-product-icon-2.png"
                  alt=""
                  class="review-product_social-2"
                /> -->
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="review-product_social-2"
                  >
                    <path
                      d="M16.804 1.92188H7.19623C4.54311 1.92188 2.39233 4.07265 2.39233 6.72577V16.3336C2.39233 18.9867 4.54311 21.1375 7.19623 21.1375H16.804C19.4571 21.1375 21.6079 18.9867 21.6079 16.3336V6.72577C21.6079 4.07265 19.4571 1.92188 16.804 1.92188Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.8432 10.9239C15.9617 11.7235 15.8251 12.5402 15.4528 13.2577C15.0805 13.9752 14.4915 14.557 13.7694 14.9205C13.0474 15.2839 12.2291 15.4104 11.4311 15.282C10.633 15.1535 9.8957 14.7767 9.32411 14.2051C8.75252 13.6336 8.37572 12.8963 8.2473 12.0982C8.11888 11.3001 8.24538 10.4819 8.6088 9.75983C8.97223 9.03778 9.55407 8.44871 10.2716 8.07641C10.9891 7.70411 11.8057 7.56753 12.6053 7.6861C13.421 7.80705 14.1761 8.18712 14.7591 8.77016C15.3421 9.3532 15.7222 10.1083 15.8432 10.9239Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2842 6.24414H17.2938"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5974 6.16786C22.4832 5.71188 22.2508 5.2941 21.9235 4.95671C21.5962 4.61931 21.1857 4.37426 20.7334 4.2463C19.0809 3.84277 12.4707 3.84277 12.4707 3.84277C12.4707 3.84277 5.86057 3.84277 4.20803 4.28473C3.75574 4.41269 3.34523 4.65775 3.01796 4.99514C2.69069 5.33253 2.45825 5.75031 2.34412 6.20629C2.04168 7.88338 1.89374 9.58469 1.90216 11.2888C1.89138 13.0058 2.03933 14.72 2.34412 16.4098C2.46994 16.8516 2.70759 17.2535 3.0341 17.5766C3.36061 17.8998 3.76494 18.1332 4.20803 18.2545C5.86057 18.6964 12.4707 18.6964 12.4707 18.6964C12.4707 18.6964 19.0809 18.6964 20.7334 18.2545C21.1857 18.1265 21.5962 17.8814 21.9235 17.5441C22.2508 17.2067 22.4832 16.7889 22.5974 16.3329C22.8975 14.6684 23.0454 12.9801 23.0393 11.2888C23.0501 9.57186 22.9021 7.85758 22.5974 6.16786V6.16786Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.309 14.431L15.8335 11.2892L10.309 8.14746V14.431Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <n-button strong secondary class="btn-comment">
                  Bình luận
                </n-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import SectionBreadcrumb from "@/components/sections/SectionBreadcrumb.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { getImageUrl } from "@/helpers/url";
// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Navigation, Pagination, Thumbs } from "swiper";
import InnerImageZoom from "vue-inner-image-zoom";
import { useRouter } from "vue-router";

export default {
  components: {
    Swiper,
    SwiperSlide,
    "inner-image-zoom": InnerImageZoom,
  },
  setup() {
    let thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    const modules = [Navigation, Pagination, Thumbs];
    const quantitySelectValue = ref(0);
    function quantitySelectDown() {
      if (quantitySelectValue.value === 0) {
        return;
      }
      quantitySelectValue.value = quantitySelectValue.value - 1;
    }
    function quantitySelectUp() {
      quantitySelectValue.value = quantitySelectValue.value + 1;
    }

    const promotionList = ref([
      {
        id: 1,
        title: "Tặng Phiếu mua hàng 100,000đ áp dụng mua thẻ cào, thẻ game",
        link: "xem ngay",
      },
      {
        id: 2,
        title:
          "Giảm đến 1,500,000đ khi tham gia thu cũ đổi mới (Không áp dụng kèm giảm giá qua VNPay)",
        link: "xem ngay",
      },
      {
        id: 3,
        title: "Giảm thêm 5% khi mua cùng sản phẩm bất kỳ có giá cao hơn",
        link: "xem ngay",
      },
      {
        id: 4,
        title:
          "Giảm 50% giá mua gói bảo hiểm rơi vỡ 6 tháng (trị giá đến 1,000,000đ)",
        link: "xem ngay",
      },
    ]);

    function createCols() {
      return [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "content",
          key: "content",
        },
      ];
    }
    function createData() {
      return Array.apply(null, { length: 10 }).map((_, i) => {
        return {
          name: `name_${i}`,
          content: `content_${i}`,
        };
      });
    }

    const handleSelectCity = (key) => {
      selectedCity.value = key;
    };
    const cityOptions = ref([
      {
        label: "Hồ Chí Minh",
        key: "Hồ Chí Minh",
      },
      {
        label: "Đà Nẵng",
        key: "Đà Nẵng",
      },
      {
        label: "Hà Nội",
        key: "Hà Nội",
      },
      {
        label: "Hải Phòng",
        key: "Hải Phòng",
      },
    ]);
    const selectedCity = ref(cityOptions.value[0].key);
    const colorSelected = ref("#4a4946");
    const colorList = [
      {
        value: "#4a4946",
        label: "#4a4946",
        images: [
          {
            src: "../src/assets/images/color-product-0.png",
            zoomSrc: "../src/assets/images/color-product-0-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-0.png",
            zoomSrc: "../src/assets/images/color-product-0-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-0.png",
            zoomSrc: "../src/assets/images/color-product-0-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-0.png",
            zoomSrc: "../src/assets/images/color-product-0-zoom.png",
          },
        ],
      },
      {
        value: "#ffdfba",
        label: "#ffdfba",
        images: [
          {
            src: "../src/assets/images/color-product-1.png",
            zoomSrc: "../src/assets/images/color-product-1-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-1.png",
            zoomSrc: "../src/assets/images/color-product-1-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-1.png",
            zoomSrc: "../src/assets/images/color-product-1-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-1.png",
            zoomSrc: "../src/assets/images/color-product-1-zoom.png",
          },
        ],
      },
      {
        value: "#adcce8",
        label: "#adcce8",
        images: [
          {
            src: "../src/assets/images/color-product-2.png",
            zoomSrc: "../src/assets/images/color-product-2-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-2.png",
            zoomSrc: "../src/assets/images/color-product-2-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-2.png",
            zoomSrc: "../src/assets/images/color-product-2-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-2.png",
            zoomSrc: "../src/assets/images/color-product-2-zoom.png",
          },
        ],
      },
      {
        value: "#f8f9f3",
        label: "#f8f9f3",
        images: [
          {
            src: "../src/assets/images/color-product-3.png",
            zoomSrc: "../src/assets/images/color-product-3-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-3.png",
            zoomSrc: "../src/assets/images/color-product-3-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-3.png",
            zoomSrc: "../src/assets/images/color-product-3-zoom.png",
          },
          {
            src: "../src/assets/images/color-product-3.png",
            zoomSrc: "../src/assets/images/color-product-3-zoom.png",
          },
        ],
      },
    ];
    const imagesList = computed(() => {
      const _colorSelected = colorList.find(
        (item) => item.value === colorSelected.value
      );
      return _colorSelected ? _colorSelected.images : [];
    });
    return {
      quantitySelectValue,
      quantitySelectUp,
      quantitySelectDown,
      promotionList,
      thumbsSwiper,
      getImageUrl,
      setThumbsSwiper,
      useRouter,
      modules,
      memorySelected: ref(null),
      memoryList: [
        {
          value: "128GB",
          label: "128GB",
        },
        {
          value: "256GB",
          label: "256GB",
        },
        {
          value: "512GB",
          label: "512GB",
        },
      ],
      colorSelected,
      colorList,
      imagesList,
      data: ref(createData()),
      columns: ref(createCols()),
      cityOptions,
      selectedCity,
      handleSelectCity,
    };
  },
};
</script>

<style scoped></style>
