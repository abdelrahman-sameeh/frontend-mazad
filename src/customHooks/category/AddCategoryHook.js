import React, { useEffect, useState } from "react";
import { notify } from "../../components/utils/NotifyComponent";
import uploadImage from "../../images/upload.png";
import { addCategory } from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const AddCategoryHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(uploadImage);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setSelectedImage(e.target.files[0]);
  };
  const handleChangeTitle = (e) => setTitle(e.target.value);

  const handleClearSelected = (e) => {
    setSelectedImage(null);
    setImage(uploadImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length <= 2) {
      return notify("يجب ان يكون عنوان التصنيف اكبر من حرفين", "warn");
    }

    if (!selectedImage || !selectedImage.type.startsWith("image")) {
      return notify("من فضلك اختر صورة", "warn");
    }

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("title", title);

    setIsPress(true);
    setLoading(true);
    await dispatch(addCategory(formData));
    setIsPress(false);
    setLoading(false);
  };

  const response = useSelector((state) => state.category.addCategory);

  useEffect(() => {
    if (!loading) {
      if (response.status === 201) {
        setImage(uploadImage);
        setSelectedImage("");
        setTitle("");
        return notify("تم انشاء التصنيف بنجاح", "success");
      }
      if (
        response.status != 201 &&
        response.data &&
        response.data.error &&
        response.data.error.length &&
        response.data.error[0].msg === "Category already exist"
      ) {
        return notify("هذا التصنيف موجود بالفعل", "error");
      }
      if (response.status === 403) {
        window.location.href = "/login";
        return notify("المسؤلؤون فقط هم يقدرون على اضافة التصنيف", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    image,
    title,
    selectedImage,
    handleChangeImage,
    handleChangeTitle,
    handleClearSelected,
    handleSubmit,
  ];
};

export default AddCategoryHook;
