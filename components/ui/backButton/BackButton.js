"use client"
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const BackButton = () => {
    const router = useRouter()
  return (
    <button onClick={() => router.back()} className="absolute top-4  p-2 bg-white rounded-lg flex gap-2 items-center">
    <FontAwesomeIcon icon={faChevronLeft} />
      <span className=" hidden md:block font-semibold">Regresar</span>
      </button>
  )
}

export default BackButton