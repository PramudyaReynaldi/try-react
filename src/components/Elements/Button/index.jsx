/* eslint-disable react/prop-types */
const Button = (props) => {
  const { style, children } = props;
  return (
    // Menggunakan props untuk mengubah masing-masing warna background dan teks pada button
    <button
      className={`h-10 px-6 font-semibold rounded-md ${style} text-white`}
      type="submit"
    >
      {/* props.children => untuk merender tanpa harus menggunakan variabel seperti "variant" */}
      {children}
    </button>
  );
};

export default Button;
