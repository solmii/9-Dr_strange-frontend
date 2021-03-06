import React from "react";
import { withRouter } from "react-router-dom";
import ArrowIcon from "Components/ArrowIcon";
import { PATH_ARROW } from "config.js";

class HamburgerList extends React.Component {
  constructor() {
    super();
    this.state = {
      click: false,
      secondClick: false,
    };
  }

  clickHandler = () => {
    return this.setState({
      click: !this.state.click,
    });
  };

  secondClickHandler = () => {
    return this.setState({
      secondClick: !this.state.secondClick,
    });
  };

  render() {
    const { click, secondClick } = this.state;
    const { categoryTitle, listLinkHandler, category } = this.props;

    return (
      <section className="HamburgerList">
        <ul className="list_wrap">
          <li className="category_list">
            <button
              className="category_button"
              onClick={() => this.clickHandler()}
            >
              <p className="category_title">{categoryTitle}</p>
              <ArrowIcon
                view="0 0 60 35"
                path={PATH_ARROW}
                height="20"
                width="20"
                rotate={click ? "rotate(180deg)" : ""}
              />
            </button>

            <ul className="sub_list_wrap">
              <li
                className="sub_category_list"
                style={{ display: click ? "block" : "none" }}
              >
                <button className="sub_category_button">
                  <span
                    className="sub_category_title"
                    onClick={() => listLinkHandler(category)}
                  >
                    신발
                  </span>
                  <div onClick={() => this.secondClickHandler()}>
                    <ArrowIcon
                      view=" 0 0 60 35"
                      width="15"
                      height="15"
                      path={PATH_ARROW}
                      className="arrow"
                      rotate={secondClick ? "rotate(180deg)" : ""}
                    />
                  </div>
                </button>

                <div
                  className="inner_sub_list"
                  style={{ display: secondClick ? "block" : "none" }}
                >
                  <button className="inner_sub_category_button">
                    <span className="inner_sub_category_title">부츠</span>
                  </button>
                  <button className="inner_sub_category_button">
                    <span className="inner_sub_category_title">슈즈</span>
                  </button>
                  <button className="inner_sub_category_button">
                    <span className="inner_sub_category_title">샌들</span>
                  </button>
                </div>
                <button className="sub_category_button">
                  <span className="sub_category_title">컬렉션</span>

                  <ArrowIcon
                    view=" 0 0 60 35"
                    width="15"
                    height="15"
                    path={PATH_ARROW}
                    className="arrow"
                  />
                </button>

                <button className="sub_category_button">
                  <span className="sub_category_title">액세서리</span>

                  <ArrowIcon
                    view="0 0 60 35"
                    path={PATH_ARROW}
                    className="arrow"
                    width="13"
                    height="13"
                  />
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    );
  }
}

export default withRouter(HamburgerList);
