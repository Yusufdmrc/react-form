import { object, string, number, date, InferType, ref } from "yup";

const validations = object({
  username: string()
    .min(6, "Kullanıcı adınız en az 6 karakter olmalıdır")
    .required("Zorunlu Alan"),
  email: string().email("Geçerli bir email girin").required("Zorunlu Alan"),
  password: string()
    .min(5, "Parolanız en az 5 karakter olmalıdır")
    .required("Zorunlu Alan"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Parolalar uyuşmuyor")
    .required("Zorunlu Alan"),
});

export default validations;
