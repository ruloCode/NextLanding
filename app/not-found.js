export const metadata = {
  title: "404 | TeKer"
};

export default function NotFoundPage() {
  return (
    <div className=" min-h-96 flex items-center justify-center  p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <svg
            className="w-12 h-12 mx-auto text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            404 - Página no encontrada
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Desafortunadamente, la página que estás buscando no existe. Puede
            haber sido movida o eliminada.
          </p>
        </div>
      </div>
    </div>
  );
}
