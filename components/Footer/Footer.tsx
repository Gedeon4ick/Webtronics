import styles from './Footer.module.scss'
import Image from 'next/image'
import logo from '../../icons/logo.svg'
import facebook from '../../icons/facebook.svg'
import social from '../../icons/social.svg'
import twiter from '../../icons/twiter.svg'
import LinkedIn from '../../icons/LinkedIn.svg'
import { Link } from 'react-scroll/modules'

type LinkMenu = {
	id: number
	name: string
	href: string
}

interface Props {
	links: LinkMenu[]
}

const Footer = ({ links }: Props): JSX.Element => {
	return (
		<div className={styles.footer}>
			<div className={styles.logo}>
				<Image src={logo} alt="logo" />
				<div className={styles.descr}>
					Wisconsin Ave, Suite 700
					Chevy Chase, Maryland 20815
				</div>
			</div>
			<div className={styles.footerMenu}>
				<div className={styles.title}>
					Company
				</div>
				<ul className={styles.ul}>
					{links.map(link =>
						<li className={styles.li} key={link.id}>
							<Link className={styles.a} to={link.href} spy={true} smooth={true} duration={700} offset={-50}>{link.name}</Link>
						</li>
					)}
				</ul>
			</div>
			<div className={styles.icons}>
				<div className={styles.title}>
					Social media
				</div>
				<div className={styles.social}>
					<Image src={facebook} alt="facebook"></Image>
					<Image src={social} alt="social"></Image>
					<Image src={twiter} alt="twiter"></Image>
					<Image src={LinkedIn} alt="LinkedIn"></Image>
				</div>
			</div>
		</div>
	)
}

export default Footer
