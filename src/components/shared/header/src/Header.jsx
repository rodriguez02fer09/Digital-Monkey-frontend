import Image from 'next/image'
import Button from '../../../button/index'
import '../styles/desktop.scss'

const Header = ({type}) => {
  const defaultHeader = 'header'
  const imageSrc =
    type === 'login-header' ? '/images/logoblack.svg' : '/images/logoverde.svg'

  return (
    <header className={`${defaultHeader} ${defaultHeader}--${type}`}>
      <div className={`${defaultHeader}--containImage`}>
        <Image src={imageSrc} alt="Logo" width={100} height={50} />
      </div>
      {type !== 'login-header' && (
        <div className={`${defaultHeader}--containButton`}>
          <Button type="boton-sign-in" label="Sign In" />
          <Button type="boton-create-account" label="Create Account" />
        </div>
      )}
    </header>
  )
}

export default Header