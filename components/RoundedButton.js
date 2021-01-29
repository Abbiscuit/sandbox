export default function RoundedButton({
  label,
  type,
  outlined,
  className,
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        outlined
          ? `text-center mxauto w-full px-4 py-2 border-blue-600 border bg-white text-blue-600 rounded-full ${className}`
          : `text-center mxauto w-full px-4 py-2  text-white bg-blue-600  border border-blue-600 rounded-full ${className}`
      }
    >
      {label}
    </button>
  );
}
