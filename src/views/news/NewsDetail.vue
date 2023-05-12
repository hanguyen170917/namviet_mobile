<template>
  <div>
    <section-breadcrumb></section-breadcrumb>
    <section class="products-section-2 section" ref="scrollContainer">
      <div class="container">
        <div class="blog" v-if="newsDetail">
          <h1 class="blog_title">{{ newsDetail.title }}</h1>
          <div v-html="newsDetail.body"></div>
          <!-- <div class="blog_img-1">
            <img src="../assets/images/blog-1.png" alt="" />
          </div>
          <p class="blog_tag-p1">
            Mỗi khi tìm một chiếc điện thoại mới lại là một điều đắn đo lớn dành
            cho các bạn trẻ. Liệu có sản phẩm điện thoại dành cho Gen Z nào vừa
            có thiết kế trending, cấu hình ngon mà giá lại tốt không nhỉ? Hiểu
            điểu những đắn đo, 24h Công nghệ đã lập ra danh sách những mẫu điện
            thoại phù hợp với tiêu chí đó, và mang đến cho bạn trong bài viết
            ngày hôm nay.
          </p>
          <p class="blog_tag-p2">
            *Bài viết dưới đây được sắp xếp theo mức giá tăng dần. Giá và khuyến
            mãi của sản phẩm được cập nhật ngày 25/05/2022 và có thể thay đổi
            trong tương lai.
          </p>
          <div class="blog_content-1">
            <p class="blog_content-title">
              1. Realme C35: Điện thoại dành cho Gen Z giá rẻ nhất
            </p>
            <p class="blog_content-1-tag-p1">
              Mở đầu danh sách điện thoại dành cho Gen Z với chiếc Realme C35.
              Thiết kế mặt lưng của sản phẩm được trau chuốt với chất liệu nhựa
              giả kính cùng màu sắc vô cùng bóng bẩy và sang trọng. Mình đặc
              biệt ấn tượng với màu xanh mint huyền ảo đầy trẻ trung, năng động
              và là một lựa chọn phù hợp cho các bạn 'Gen Z'.
            </p>
            <p class="blog_content-1-tag-p2">
              Khi nhắc về những mẫu điện thoại có thiết kế đẹp, mang đậm nétcá
              tính thì mẫu điện thoại Realme C35 hoàn toàn là một lựa chọn tốt
              đó. Realme C35 được trang bị màn hình IPS LCD 6.6 inch, độ phân
              giải Full HD+, cùng thiết kế giọt nước ở chính giữa màn hình. Với
              màn hình cực lớn này đem đến trải nghiệm giải trí tuyệt vời, chơi
              game hay coi Youtube đều không làm bạn thất vọng.
            </p>
            <div class="blog_content-1-img">
              <img src="../assets/images/blog-2.png" alt="" />
            </div>
            <p class="blog_content-img-name">
              Realme C35 có màn hình lớn đem đến trải nghiệm giải trí tuyệt vời.
            </p>
            <p class="blog_content-1-tag-p3">
              Realme C35 được trang bị màn hình IPS LCD 6.6 inch, độ phân giải
              Full HD+, cùng thiết kế giọt nước ở chính giữa màn hình. Với màn
              hình cực lớn này đem đến trải nghiệm giải trí tuyệt vời, chơi game
              hay coi Youtube đều không làm bạn thất vọng. Chưa dừng lại ở đó,
              hiệu năng của Realme C35 ổn định với con chip Unisoc Tiger T616,
              với những trải nghiệm mượt mà và ổn định nhất trong các tác vụ sử
              dụng cơ bản. Với những tựa game quốc dân như Liên Quân Mobile,
              PUBG Mobile,... thì Realme C35 vẫn có thể đáp ứng được ở mức tùy
              chỉnh đồ họa phù hợp.
            </p>
            <p class="blog_content-1-tag-p4">
              Realme C35 mang đến cho mình một thời lượng pin để chơi game là
              khá tốt. Hầu hết các tựa game mà mình trải nghiệm thì máy đều có
              thể trụ được hơn 5 tiếng hồ, đặc biệt là với tựa game Liên Quân
              Mobile, lên đến 6 tiếng rưỡi. Mình nghĩ nếu bạn dùng cho các tác
              vụ thông thường thì còn được lâu hơn đó.
            </p>
          </div>
          <div class="blog_content-2">
            <p class="blog_content-title">
              2. Xiaomi Redmi Note 11S 5G: Bắt kịp xu hướng, hòa nhịp cùng 5G
              tốc độ cao
            </p>
            <p class="blog_content-2-tag-p1">
              Tiếp theo trong danh sách này sẽ là đại diện đến từ nhà Xiaomi:
              Redmi Note 11S 5G. Redmi Note 11S 5G sẽ được cung cấp sức mạnh bởi
              bộ vi xử lý Dimensity 810, nhờ đó có thể xử lý nhanh chóng các tác
              vụ cơ bản hằng ngày như lướt Facebook, xem Youtube và chơi game
              mượt mà. Xiaomi đã trang bị cho chiếc điện thoại tầm trung của
              mình cụm 3 camera sau với camera chính có thông số ấn tượng là 50
              MP, hai camera còn lại lần lượt là 8 MP và 2 MP.
            </p>
            <p class="blog_content-2-tag-p2">
              Cùng với AI và sự tối ưu hóa đến từ Xiaomi, hứa hẹn sẽ mang lại
              những bức hình sắc nét và độ chân thực cao, thoải mái sống ảo hay
              quay video up lên Tik Tok. Một điểm cộng của chiếc Xiaomi Redmi
              Note 11S 5G đó chính là hỗ trợ công nghệ 5G, kết hợp với hiệu năng
              mạnh mẽ giúp bạn thoải mái sử dụng các tác vụ cơ bản trong 2 - 3
              năm tới, khi mà công nghệ 5G phổ biến hơn.
            </p>
            <p class="blog_content-2-tag-p3">
              Viên pin 5.000 mAh trên đem lại thời lượng sử dụng khá ấn tượng.
              Với bài test của các reviewer trang 24h Công nghệ, chiếc Redmi
              Note 11S 5G có thể dùng liên tục trong hơn 8 tiếng. Thời lượng này
              mình nghĩ đủ để bạn có thể sử dụng cả ngày dài.
            </p>
            <div class="blog_content-2-img">
              <img src="../assets/images/blog-3.png" alt="" />
            </div>
            <p class="blog_content-img-name">
              Realme C35 có màn hình lớn đem đến trải nghiệm giải trí tuyệt vời.
            </p> -->
          <div class="blog_related-articles" v-if="newsDetail.article_sames">
            <p class="blog_content-title">Các bài viết liên quan</p>
            <div class="blog_related-articles-list">
              <div
                class="blog_related-articles-item"
                v-for="item in newsDetail.article_sames"
                :key="item"
              >
                <img :src="item.thumbnail_path" alt="" />
                <p class="blog_related-articles-item-date">
                  {{ item.created_at }}
                </p>
                <a href="/news/:slug">
                  <p class="blog_related-articles-item-title">
                    {{ item.title }}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import SectionBreadcrumb from "@/components/sections/SectionBreadcrumb.vue";
import { getImageUrl } from "@/helpers/url.js";
import { useRoute } from "vue-router";
import { useLoadingBar } from "naive-ui";
import { useNewsStore } from "@/stores/news.js";

const route = useRoute();
const loadingBar = useLoadingBar();
const newsStore = useNewsStore();
const newsDetail = computed(() => newsStore.newsDetail);
const getNewsDetail = async (slug) => {
  try {
    loadingBar.start();
    await newsStore.getNewsDetail(slug);
  } catch (error) {
    console.log(error.message);
  } finally {
    loadingBar.finish();
  }
};
watch(
  route,
  (newRoute) => {
    getNewsDetail(newRoute.params.slug);
  },
  { immediate: true }
);
</script>

<style scoped></style>
