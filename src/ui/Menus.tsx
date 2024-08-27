import {
  ReactNode,
  createContext,
  useContext,
  useState,
  MouseEvent,
  FC,
} from 'react';
import { HiEllipsisVertical } from 'react-icons/hi2';
import styled from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';

type MenusContextProps = {
  openId: string;
  close: () => void;
  open: (id: string) => void;
  position: { x: number; y: number } | null;
  setPosition: (position: { x: number; y: number } | null) => void;
};

type Props = {
  children: ReactNode;
};

type PropsMenus = {
  children?: ReactNode;
  id: string;
};

type ButtonProps = {
  children: ReactNode;
  icon: ReactNode;
  onClick: () => void;
};

const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul<{ $position: { x: number; y: number } | null }>`
  position: absolute;
  z-index: 1;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => (props.$position ? `${props.$position.x}px` : 'auto')};
  top: ${(props) => (props.$position ? `${props.$position.y}px` : 'auto')};
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext<MenusContextProps | undefined>(undefined);

const Menus: FC<Props> & {
  Menu: FC<Props>;
  Toggle: FC<{ id: string }>;
  List: FC<PropsMenus>;
  Button: FC<ButtonProps>;
} = ({ children }: Props) => {
  const [openId, setOpenId] = useState<string>('');
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  const close = () => setOpenId('');
  const open = (id: string) => setOpenId(id);

  const state: MenusContextProps = {
    openId,
    close,
    open,
    position,
    setPosition,
  };

  return (
    <MenusContext.Provider value={state}>{children}</MenusContext.Provider>
  );
};

const Toggle: FC<{ id: string }> = ({ id }) => {
  const { openId, close, open, setPosition } = useContext(MenusContext)!;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: -8,
      y: rect.height + 1,
    });

    openId === '' || openId !== id ? open(id) : close();
  };

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
};

const List: FC<PropsMenus> = ({ id, children }) => {
  const { openId, position, close } = useContext(MenusContext)!;
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return (
    <StyledList $position={position} ref={ref}>
      {children}
    </StyledList>
  );
};

const Button: FC<ButtonProps> = ({ children, icon, onClick }) => {
  const { close } = useContext(MenusContext)!;

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li onClick={handleClick}>
      <StyledButton>
        {icon && icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
