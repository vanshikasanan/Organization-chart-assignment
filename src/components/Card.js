import Image from "next/image";
import avatarImg from "../../public/avatar-icon.png";
import styles from "../styles/Card.module.css";
const Card = ({ name, role, team }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image src={avatarImg} alt={`${name}`} className={styles.avatar} />
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>
          <span className={styles.label}>Role</span>
          {role}
        </p>
        <p className={styles.team}>
          <span className={styles.label}>Team</span>
          {team}
        </p>
      </div>
    </div>
  );
};

export default Card;
