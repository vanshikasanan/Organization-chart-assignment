import Image from "next/image";
import avatarImg from "../../public/avatar-icon.png";
import styles from "../styles/Card.module.css";
const Card = (props) => {
  return (
    <div>
      <ul>
        {props.data.map((item) => (
          <li className="list-card">
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image
                  src={avatarImg}
                  alt={`${item.name}`}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.name}>{item.name}</h2>
                <p className={styles.role}>
                  <span className={styles.label}>Role</span>
                  {item.role}
                </p>
                <p className={styles.team}>
                  <span className={styles.label}>Team</span>
                  {item.team}
                </p>
              </div>
            </div>
            {console.log(item.children)}
            {item.children?.length && <Card data={item.children} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
