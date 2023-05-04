interface contextObj {
  contextStyle: string;
  fnSetNavRef: (data: React.RefObject<HTMLElement>) => any;
  fnSetHeaderRef: (data: React.RefObject<HTMLElement>) => any;
  fnFeatureSectionRef: (data: React.RefObject<HTMLElement>) => any;
}

type CLoseModalFnType =
  | React.MouseEvent<HTMLDivElement, MouseEvent>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface modalContextObj {
  openModal: boolean;
  handleModalClick: () => any;
  closeModalFn: (e: CLoseModalFnType) => any;
}
