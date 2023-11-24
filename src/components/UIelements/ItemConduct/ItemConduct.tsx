import * as S from "./styles";

interface ItemConductProps {
  itemName?: string;
}

const ItemConduct = ({}: ItemConductProps) => {
  return (
    <S.StyledItemConduct>
      <section>
        <span>
          <p>Item</p>
        </span>
        <article>
          <div>
            <img src="" alt="" />
            <p>perimitdo</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>permitido</p>
          </div>
        </article>
      </section>
    </S.StyledItemConduct>
  );
};

export default ItemConduct;
