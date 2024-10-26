export function CompDocumentacion({ imgLeft, text, imgRight }) {
  return (
    <div>
      <div className="bg-[#000000c8] rounded-3xl px-5 py-5 m-2">
        <div className="flex items-center">
          {imgLeft}
          {text}
          {imgRight}
        </div>
      </div>
    </div>
  );
}
