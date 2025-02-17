import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";
import { ReactComponent as NotFoundImage } from "assets/not_found.svg";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          {"< Voltar"}
        </button>
      </div>

      <NotFoundImage style={{ width: "500px" }} />
    </div>
  );
}
