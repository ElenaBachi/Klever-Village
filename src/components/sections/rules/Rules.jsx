import React, { useState } from "react";
import RulesModal from "./elements/RulesModal/RulesModal";
import RulesList from "./elements/RulesList/RulesList";
import Modal from "../../elements/Modal/Modal";
import "./style.scss";

export default function Rules() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section className="rules" id="rules">
      <div className="wrap">
        <h2 className="rules__title">Правила проживания</h2>

        <RulesList />

        <button className="modal-open-btn" onClick={() => setModalActive(true)}>
          Все правила
        </button>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <RulesModal />
      </Modal>
    </section>
  );
}
