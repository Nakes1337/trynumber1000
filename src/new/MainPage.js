import React from "react";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-sm-8 col-md-8">
              <h2> Инструкция </h2>
              <hr />
              <h4>1. Создать профиль в Sing in </h4>
              <h4>2. Проверить данные профиля в Profile </h4>
              <h4>3. Удалить данные кнопкой delete account </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
