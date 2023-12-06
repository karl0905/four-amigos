import Image from "next/image";

export default function MenuItem(props) {
  return (
    <div
      className={`flex bg-white shadow-xl p-4 rounded-lg w-11/12 md:w-2/5 cursor-pointer ${
        props.status === "sold_out" && "opacity-50 pointer-events-none"
      }`}
    >
      <div className="w-1/2">
        <Image
          src={props.src}
          height={200}
          width={200}
          alt="Billede af Birriatacos"
          className=""
        />
      </div>
      <div className="w-1/2">
        <h3 className="font-bold text-xl pb-2">{props.title}</h3>
        <p className="line-clamp-3">
          {props.amount} velsmagende tacos med hjemmelavet langtids braiseret
          oksekød. Serveret med ost, løg, koriander eller persille og lime.
        </p>
        <div className="flex pt-2 items-center justify-between">
          <p className="text-lg">kr. {props.price},-</p>
          <button className="bg-light-orange p-2 pl-4 pr-4 rounded-lg">
            Tilføj
          </button>
        </div>
      </div>
    </div>
  );
}
