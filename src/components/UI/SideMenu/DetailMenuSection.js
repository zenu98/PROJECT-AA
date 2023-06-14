import "./DetailMenuSection.scss";
const DetailMenuSection = ({ detailItem }) => {
  const menu = detailItem.menu;
  console.log(menu);
  return (
    <div className="menu_section_container">
      <div className="menu_section_contents">
        <ul className="menu_section">
          {menu &&
            menu.map((item) => (
              <li className="menu_section border" key={item.food}>
                <div className="menu">
                  <div className="menu_image">
                    <img src={`img/nodata.png`} alt="dummy" />
                  </div>
                  <div className="menu_info">
                    <div>
                      <span>{item.food}</span>
                    </div>
                    <div>
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailMenuSection;
