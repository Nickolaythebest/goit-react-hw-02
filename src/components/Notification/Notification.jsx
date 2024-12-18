import styles from './Notification.module.css';
const Notification = ({hasFeedback}) => {
    if (hasFeedback) {
        return null;
    }
    return (
         <div>
                <p className={styles.text}>No feedback yet</p>
            </div>
    )
    }
export default Notification;