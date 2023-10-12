import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uploadImage from "../../images/upload.png";
import { notify } from "../../components/utils/NotifyComponent";
import { validationPhone } from "../utils/validationPhone";
import { addProduct } from "../../redux/actions/productAction";
import upload from "../../images/upload.png";

const validation = (
  image,
  title,
  description,
  category,
  startPrice,
  leastIncreasePrice,
  startTime,
  endTime,
  phoneNumber
) => {
  if (!image || !image.type.startsWith("image")) {
    notify("من فضلك اختر صورة", "warn");
    return false;
  }
  if (title.length < 2) {
    notify("يجب ان يكون اسم المنتج اكبر من حرفين");
    return false;
  }
  if (!description) {
    notify("وصف المنتج مطلوب");
    return false;
  }
  if (category === "0") {
    notify("من فضلك اختر تصنيف");
    return false;
  }
  if (startPrice <= 0) {
    notify("السعر المبدئى يجب ان يكون اكبر من صفر");
    return false;
  }
  if (leastIncreasePrice <= 0) {
    notify("اقل قيمة للمزايدة يجب ان يكون اكبر من صفر");
    return false;
  }
  if (startTime === "" || endTime === "") {
    notify(" من فضلك حدد تاريخ بدأ وانتهاء");
    return false;
  }
  if (new Date(startTime).getTime() < Date.now()) {
    notify("يجب ان يكون تاريخ البدء اكبر من تاريخ اليوم");
    return false;
  }
  if (new Date(endTime).getTime() <= new Date(startTime).getTime()) {
    notify("يجب ان يكون تاريخ الانتهاء اكبر من تاريخ البدء");
    return false;
  }
  if (!validationPhone(phoneNumber)) {
    notify("من فضلك ادخل رقم صحيح");
    return false;
  }
  return true;
};

const AddProductHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(uploadImage);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("0");
  const [startPrice, setStartPrice] = useState("");
  const [leastIncreasePrice, setLeastIncreasePrice] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState(Date.now());
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeSelectedFile = (e) => {
    setSelectedImage(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleChangeDescription = (e) => setDescription(e.target.value);
  const handleChangeCategory = (e) => setCategory(e.target.value);
  const handleChangeStartPrice = (e) => setStartPrice(e.target.value);
  const handleChangeLeastIncreasePrice = (e) =>
    setLeastIncreasePrice(e.target.value);
  const handleChangeStartTime = (e) => setStartTime(e.target.value);
  const handleChangeEndTime = (e) => setEndTime(e.target.value);
  const handleChangePhone = (e) => setPhoneNumber(e.target.value);

  const handleClearSelected = (e) => {
    setSelectedImage(null);
    setImage(uploadImage);
  };

  const submit = async (e) => {
    e.preventDefault();
    // validation
    if (
      !validation(
        selectedImage,
        title,
        description,
        category,
        startPrice,
        leastIncreasePrice,
        startTime,
        endTime,
        phoneNumber
      )
    ) {
      return false;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("firstPrice", startPrice);
    formData.append("leastIncreasePrice", leastIncreasePrice);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    formData.append("phoneNumber", phoneNumber);



    setLoading(true);
    setIsPress(true);
    await dispatch(addProduct(formData));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.product.addProduct);
  console.log(response);

  useEffect(() => {
    if (!loading) {
      if ( response && response.status === 201) {
        setImage(upload);
        setSelectedImage(null);
        setTitle("");
        setDescription("");
        setCategory("0");
        setStartTime("");
        setEndTime("");
        setStartPrice("");
        setLeastIncreasePrice("");
        setPhoneNumber("");
        return notify("تم اضافة المنتج بنجاح", "success");
      }
      if ( response && response.status !== 201 && response.data && response.data.data) {
        return notify("حدث خطأ اثناء الاضافة", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    title,
    selectedImage,
    image,
    description,
    category,
    startPrice,
    leastIncreasePrice,
    startTime,
    endTime,
    phoneNumber,
    handleChangeTitle,
    handleChangeSelectedFile,
    handleChangeDescription,
    handleChangeCategory,
    handleChangeStartPrice,
    handleChangeLeastIncreasePrice,
    handleChangeStartTime,
    handleChangeEndTime,
    handleChangePhone,
    handleClearSelected,
    submit,
  ];
};

export default AddProductHook;
