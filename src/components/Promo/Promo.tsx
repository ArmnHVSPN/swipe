import { achivmentData } from "../../initerfaces/data";
import './promo.scss';

export const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <div className="promo__title">In numbers</div>
          <div className="promo__content">
            {achivmentData.map((category, index) => {
              return (
                <div className="promo__category" key={index}>
                  {category.items.map((item, idx) => {
                    return (
                      <div className="promo__items" key={idx}>
                        <div className="promo__items_title">{item.title}</div>
                        <div className="promo__items_achivment">
                          {item.count}
                        </div>
                        <div className="promo__items_descr">{item.descr}</div>
                        
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
