import MeetImg from '../../images/meet.svg'
import styles from './Session.module.css'

function Session() {
	return (
		<section className={styles.session}>
			<div className={styles.container}>
				<div className={styles.session__inner}>
					<div className={styles.session__text}>
						<h2 className={styles.session__heading}>
							Get 15-Minutes Complimentary online session.
						</h2>
						<div className={styles.session__info}>
							Limited Period Offer. Claim Now.
						</div>
						<button className={styles.session__btn}>Book now</button>
					</div>
					<div className={styles.session__avatar}>
						<a className={styles.session__btnMeet} href='/'>
							<img
								className={styles.session__meetImg}
								src={MeetImg}
								alt='google-meet'
							/>
							<div>Meet</div>
						</a>
						<img
							className={styles.session__avatarImg}
							src='https://via.placeholder.com/560x430'
							alt='avatar'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Session
