import Image from "next/image";
import avatarImg from "../../public/avatar-icon.png";
import editIcon from "../../public/edit-icon.png";

import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div>
      <ul>
        {props.data.map((item) => (
          <li className="list-card" key={item.name}>
            <div className={styles.card}>
              <Image
                src={editIcon}
                alt="edit"
                className={styles.edit}
                width={20}
                height={20}
              />
              <div className={styles.cardBody}>
                <Image
                  src={avatarImg}
                  alt={`${item.name}`}
                  className={styles.avatar}
                />

                <div className={styles.info}>
                  <h4 className={styles.name}>{item.name}</h4>
                  <div className={styles.details}>
                    <p className={styles.label}>Role</p>
                    <p className={styles.role}>{item.role}</p>
                  </div>
                  <div className={styles.details}>
                    <p className={styles.label}>Team</p>
                    <p className={styles.team}>{item.team}</p>
                  </div>
                </div>
              </div>
            </div>
            {item.children?.length > 0 && <Card data={item.children} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
