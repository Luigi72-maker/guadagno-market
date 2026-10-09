export default function Icon({ name, ...props }) {
  const paths = {
    whatsapp: (
      <>
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8a8.5 8.5 0 1 1 16.2-4Z" />
        <path d="M8.1 7.4c-.8 1.2.1 3.8 2 5.6 1.8 1.8 4.1 2.5 5.3 1.6l.7-1.2-2.5-1.2-.9 1c-1.4-.6-2.5-1.7-3-3l.8-.9-1.2-2.4Z" />
      </>
    ),
    bag: (
      <>
        <path d="M4 7h16v14H4z" />
        <path d="M9 9V5a3 3 0 0 1 6 0v4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6h5" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    bread: (
      <>
        <path d="M5 10a3 3 0 0 1 0-6h14a3 3 0 0 1 0 6v10H5Z" />
        <path d="M9 6v3m6-3v3m-3 3v8" />
      </>
    ),
    carrot: (
      <>
        <path d="M4 20s2-12 7-14c3-1 7 3 6 6-2 5-13 8-13 8Z" />
        <path d="m10 10 3 3m-6 1 2 2m7-10 4-4m-3 5 4 1m-6-4V1" />
      </>
    ),
    knife: (
      <>
        <path d="m15 9 5-6c2-1 3 1 2 2l-5 6M15 9 3 21c5 1 9-1 15-8Z" />
      </>
    ),
  };
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
