import styled from 'styled-components';
import * as DialogPrimitives from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons-react';

interface IModal {
  children: any;
}

export default function Modal({ children }: IModal) {
  return <DialogPrimitives.Root>{children}</DialogPrimitives.Root>;
}

const DialogTrigger = ({ children }: { children: any }) => {
  return <DialogPrimitives.Trigger>{children}</DialogPrimitives.Trigger>;
};

const DialogContent = ({
  children,
  title,
  className,
}: {
  children: any;
  title: string;
  className?: any;
}) => {
  return (
    <DialogPrimitives.Portal>
      <DialogOverlay />
      <DialogContentBody aria-describedby={undefined} className={className}>
        <div className="d-flex flex-row justify-content-between align-items-start">
          <DialogPrimitives.Title>{title}</DialogPrimitives.Title>
          <DialogPrimitives.Close aria-label="Close">
            <IconX color={'black'} size={36} />
          </DialogPrimitives.Close>
        </div>
        {children}
      </DialogContentBody>
    </DialogPrimitives.Portal>
  );
};

const DialogContentBody = styled(DialogPrimitives.Content)`
  z-index: 1060;
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 8px);
  max-width: 1440px;
  height: calc(100vh - 8px);
  max-height: 1080px;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  & .btn-close {
    width: 45px;
    height: 45px;
    margin: 1px;
    padding: 0px;
    border-radius: 45px;
    line-height: 0;
    position: relative;
    right: 0px;
    top: 0px;
    background-color: ${(props) => props.theme.colors.typoGrey};
    border: none;
    outline: none;
    z-index: 1100;

    ${(props) => props.theme.breakpoints.mq[2]} {
      width: 33px;
      height: 33px;
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      width: 28px;
      height: 28px;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      width: 23px;
      height: 23px;
    }
  }

  &:focus {
    outline: none;
  }

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const DialogOverlay = styled(DialogPrimitives.Overlay)`
  z-index: 1055;
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

Modal.Button = DialogTrigger;
Modal.Content = DialogContent;
