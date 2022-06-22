import Link from 'next/link';
import Container from './Container';

export default function Message() {
  return (
    <Container className={'relative'}>
      <div className=" fixed z-[10] bottom-[1.6rem] right-[1.6rem] rounded-[100%] flex items-center justify-center h-[8rem] w-[8rem] bg-purple">
        <Link href={'https://wa.me/qr/RWBQKO4KXJZ3E1'}>
          <svg className="h-[4rem] w-[4rem] cursor-pointer">
            <use href="/images/sprite.svg#icon-whatsapp" />
          </svg>
        </Link>
      </div>
    </Container>
  );
}
