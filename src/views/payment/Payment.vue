<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <n-breadcrumb>
          <n-breadcrumb-item href="/"> TRANG CHỦ</n-breadcrumb-item>
          <n-breadcrumb-item href="/cart"> GIỎ HÀNG</n-breadcrumb-item>
          <n-breadcrumb-item href="#"> THANH TOÁN</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <section class="products-section-2 section">
      <div class="container">
        <div class="payment">
          <h1 class="title">THANH TOÁN</h1>
          <n-grid
            x-gap="30"
            class="payment_grid"
            cols="1 m:5"
            responsive="screen"
          >
            <n-gi span="1 m:3">
              <div class="payment_left">
                <p class="payment_left_title">Địa chỉ giao hàng</p>
                <!-- <div class="payment_left_form"> -->
                <!-- <n-input placeholder="Tên*" type="text" />
                  <n-input placeholder="Họ" type="text" />
                  <n-input placeholder="Công ty" type="text" />
                  <n-input placeholder="Địa chỉ nhận hàng*" type="text" />
                  <n-input
                    placeholder="Apartment, suite, etc. ( optional )"
                    type="text"
                  />
                  <n-input placeholder="Thành phố" type="text" />
                  <n-select
                    v-model:value="countrySelected"
                    placeholder="Quốc gia, lãnh thổ"
                    :options="options"
                    class="payment_left_form_company"
                  >
                  </n-select>
                  <n-input placeholder="Số điện thoại*" type="text" />
                  <div class="payment_methods">
                    <p class="payment_left_title">Phương thức thanh toán</p>
                    <div class="payment_onl">
                      <n-radio
                        class="payment_methods_1"
                        :checked="checkedValue === 'radio1'"
                        value="radio1"
                        name="basic-demo"
                        @change="handleChange"
                      >
                        Thanh toán bằng thẻ tín dụng, thẻ quà tặng, PayPal
                      </n-radio>
                      <div class="payment_methods_onl">
                        <p>
                          <img
                            src="../assets/images/payment-onl-1.png"
                            alt=""
                          />
                        </p>
                        <p class="payment-onl-2">
                          <img
                            src="../assets/images/payment-onl-2.png"
                            alt=""
                          />
                        </p>
                        <p>
                          <img
                            src="../assets/images/payment-onl-3.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                    <div class="payment_off">
                      <n-radio
                        class="payment_methods_2"
                        :checked="checkedValue === 'radio2'"
                        value="radio2"
                        name="basic-demo"
                        @change="handleChange"
                      >
                        Thanh toán bằng tiền mặt khi giao hàng
                      </n-radio>
                    </div>
                  </div> -->

                <!-- <n-form
                    ref="formRef"
                    inline
                    :label-width="80"
                    :model="formValue"
                    :rules="rules"
                    :size="size"
                  >
                    <n-form-item class="payment_left_form">
                      <n-input placeholder="Tên*" type="text" />
                    </n-form-item>
                  </n-form> -->
                <!-- </div> -->

                <n-form
                  size="large"
                  class="payment_content"
                  ref="formRef"
                  :model="formValue"
                  :rules="validatePayment"
                >
                  <div class="payment_left_form">
                    <n-form-item path="firstname">
                      <n-input
                        v-model:value="formValue.firstname"
                        placeholder="Họ"
                      />
                    </n-form-item>
                  </div>
                  <div class="payment_left_form">
                    <n-form-item path="name">
                      <n-input
                        v-model:value="formValue.name"
                        placeholder="Tên*"
                        v-on:keypress="isLetter($event)"
                      />
                    </n-form-item>
                  </div>
                  <div class="payment_left_form">
                    <n-form-item path="phoneNumber">
                      <n-input
                        :maxlength="10"
                        v-model:value="formValue.phoneNumber"
                        placeholder="Số điện thoại*"
                        @keypress="isNumber($event)"
                      />
                    </n-form-item>
                  </div>
                  <div class="payment_left_form">
                    <n-form-item path="address">
                      <n-input
                        v-model:value="formValue.address"
                        placeholder="Địa chỉ nhận hàng*"
                      />
                    </n-form-item>
                  </div>

                  <div class="payment_left_form">
                    <n-form-item path="company">
                      <n-input
                        v-model:value="formValue.company"
                        placeholder="Công ty"
                      />
                    </n-form-item>
                  </div>

                  <div class="payment_left_form">
                    <n-form-item path="apartment">
                      <n-input
                        v-model:value="formValue.apartment"
                        placeholder="Apartment, suite, etc. ( optional )"
                      />
                    </n-form-item>
                  </div>
                  <div class="payment_left_form">
                    <n-form-item path="city">
                      <n-select
                        v-model:value="citySelected"
                        placeholder="Thành phố"
                        :options="options"
                        class="payment_left_form_company"
                      >
                      </n-select>
                    </n-form-item>
                  </div>
                  <div class="payment_methods">
                    <p class="payment_left_title">Phương thức thanh toán</p>
                    <div class="payment_onl">
                      <n-radio
                        class="payment_methods_1"
                        :checked="checkedValue === 'radio1'"
                        value="radio1"
                        name="basic-demo"
                        @change="handleChange"
                      >
                        Thanh toán bằng thẻ tín dụng, thẻ quà tặng, PayPal
                      </n-radio>
                      <div class="payment_methods_onl">
                        <p>
                          <img
                            src="../../assets/images/payment-onl-1.png"
                            alt=""
                          />
                        </p>
                        <p class="payment-onl-2">
                          <img
                            src="../../assets/images/payment-onl-2.png"
                            alt=""
                          />
                        </p>
                        <p>
                          <img
                            src="../../assets/images/payment-onl-3.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                    <div class="payment_off">
                      <n-radio
                        class="payment_methods_2"
                        :checked="checkedValue === 'radio2'"
                        value="radio2"
                        name="basic-demo"
                        @change="handleChange"
                      >
                        Thanh toán bằng tiền mặt khi giao hàng
                      </n-radio>
                    </div>
                  </div>
                </n-form>
              </div>
            </n-gi>
            <n-gi span="1 m:2">
              <div class="payment_right">
                <p class="payment_right_title">Giỏ hàng</p>
                <n-grid
                  x-gap="10"
                  cols="1 m:3"
                  v-for="item in cartList"
                  :key="item.id"
                  responsive="screen"
                >
                  <n-gi span="2">
                    <cart-item
                      :name="item.name"
                      :price="item.price"
                      :quantity="item.quantity"
                      :color="item.color"
                      :img="item.img"
                    >
                    </cart-item>
                  </n-gi>
                  <n-gi span="1"
                    ><div class="text-right payment_right_price">
                      Giá: {{ formatCurrency(item.price) }}
                    </div></n-gi
                  >
                </n-grid>
                <n-input-group class="payment_right_discount">
                  <n-input
                    placeholder="Thẻ quà tặng hoặc mã giảm giá"
                    type="text"
                  />
                  <n-button strong secondary> Nhập </n-button>
                </n-input-group>
                <div class="payment_right_total_product">
                  <span>Tổng cộng</span>
                  <span>{{ formatCurrency(totalProduct) }}</span>
                </div>
                <div
                  class="payment_right_total_product payment_right_transport_fee"
                >
                  <span>Phí giao hàng</span>
                  <span>{{ formatCurrency(transportFee) }}</span>
                </div>
                <div class="payment_right_total_product payment_right_total">
                  <span>Tổng cộng</span>
                  <span>{{ formatCurrency(totalBill) }}</span>
                </div>
                <div class="btn-add__cart btn-payment paymentModal">
                  <n-button @click="submit">THANH TOÁN</n-button>
                  <n-modal
                    v-model:show="isShowModal"
                    class="custom-card"
                    preset="card"
                    size="huge"
                    :segmented="segmented"
                  >
                    <template #header>
                      <p>THANH TOÁN ONLINE</p>
                      <div class="icon-close" @click="closeModal">
                        <img src="../../assets/images/icon-close.svg" alt="" />
                      </div>
                    </template>
                    <div class="payment-info">
                      <p class="payment-info-title">
                        Thanh toán qua Internet Banking
                      </p>
                      <div class="payment-info-methods">
                        <img
                          src="../../assets/images/payment-info-1.png"
                          alt=""
                        />
                        <img
                          src="../../assets/images/payment-info-2.png"
                          alt=""
                        />
                        <img
                          src="../../assets/images/payment-info-3.png"
                          alt=""
                        />
                        <img
                          src="../../assets/images/payment-info-4.png"
                          alt=""
                        />
                        <img
                          src="../../assets/images/payment-info-5.png"
                          alt=""
                        />
                      </div>
                      <p class="payment-info-title">Chào bạn</p>
                      <div class="payment-info-content">
                        <p>
                          Đơn hàng của bạn sẽ được thanh toán qua hình thức
                          Internet Banking. Vui lòng kiểm tra hoá đơn và chuyển
                          qua số tài khoản ngân hàng của shop:
                        </p>

                        <p class="payment-info-content-2">
                          Tên: NGUYEN VAN A<br />
                          Stk: 0123214569742133<br />
                          Ngân hàng Vietcombank, chi Nam Kì Khởi Nghĩa, P8, Q.3,
                          TP.HCM<br />
                        </p>

                        <p>
                          để được phục vụ<br />
                          Cảm ơn!
                        </p>
                      </div>
                      <p></p>
                    </div>
                  </n-modal>
                </div>
              </div>
            </n-gi>
          </n-grid>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, h } from "vue";
import SectionBreadcrumb from "@/components/sections/SectionBreadcrumb.vue";
import { getImageUrl } from "@/helpers/url.js";
import { formatCurrency } from "@/helpers/format.js";
import CartItem from "@/components/CartItem.vue";
import { NModal } from "naive-ui";
const checkedValue = ref("radio2");
function handleChange(e) {
  checkedValue.value = e.target.value;
}

const transportFee = ref(1000000);
const cartList = ref([
  {
    id: "1",
    no: "",
    name: "iPhone 13 128GB Chính Hãng",
    price: 35000000,
    color: "product-cart-color-2.png",
    quantity: 5,
    img: "color-product-1.png",
  },
  // {
  //   id: "2",
  //   no: "",
  //   name: "Don't Look Back in Anger",
  //   price: 35000000,
  //   color: "product-cart-color-1.png",
  //   quantity: 5,
  //   transportFee: 1000000,
  //   img: "product-cart-1.png",
  // },
  // {
  //   id: "3",
  //   no: "",
  //   name: "Don't Look Back in Anger",
  //   price: 35000000,
  //   color: "product-cart-color-1.png",
  //   quantity: 5,
  //   transportFee: 1000000,
  //   img: "product-cart-1.png",
  // },
]);

const totalProduct = computed(() => {
  let total = 0;
  for (let i = 0; i < cartList.value.length; i++) {
    const item = cartList.value[i];
    total += item.price * item.quantity;
  }
  return total;
});

let totalBill = computed(() => totalProduct.value + transportFee.value);

const citySelected = ref(null);
const options = ref([
  {
    label: "Hồ Chí Minh",
    value: "HCM",
  },
  {
    label: "Hà Nội",
    value: "HN",
  },
  {
    label: "Đà Nẵng",
    value: "DN",
  },
]);

// const showModal = ref(false);

const isShowModal = ref(false);
// const showModal = showModalRef;
// function showModal() {
//   // const showModal = showModalRef;
// }
function closeModal() {
  isShowModal.value = false;
}

const formRef = ref(null);
const formValue = ref({
  name: "",
  firstname: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  countrySelected: "",
  phoneNumber: "",
});

const validatePayment = {
  name: {
    required: true,
    message: "Vui lòng nhập tên",
    trigger: ["input"],
  },
  address: {
    required: true,
    message: "Vui lòng nhập địa chỉ",
    trigger: ["input"],
  },
  phoneNumber: {
    trigger: ["input"],
    validator: (rule, value) => {
      const regexTel = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (value.trim() === "") {
        rule.message = "Vui lòng nhập số điện thoại";
        return false;
      }
      if (!value.match(regexTel)) {
        rule.message = "Vui lòng nhập đúng số điện thoại";
        return false;
      }
      return true;
    },
    required: true,
  },
};

const submit = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      // showModal();

      isShowModal.value = true;
    } else {
      console.log(errors);
    }
  });
};

const isNumber = (evt) => {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    evt.preventDefault();
  } else {
    return true;
  }
};

const isLetter = (e) => {
  let char = String.fromCharCode(e.keyCode);
  if (/^[A-Za-z]+$/.test(char)) return true;
  else e.preventDefault();
};
</script>

<style scoped></style>
