export type AreaProps = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  radius: number;
};
export type LevelsProps = {
  id: number;
  name: string;
  minHeight: number;
  maxHeight: number;
};
export type RisksProps = {
  id: number;
  name: string;
};

export type AreaCreateModalProps = {
  showCreateAreaModal: boolean;
  handleCloseCreateAreaModal: () => void;
};
export type AreaEditModalProps = {
  item: AreaProps;
  showEditModal: boolean;
  handleCloseEditModal: () => void;
};
export type AreaDeleteModalProps = {
  item: AreaProps;
  showDeleteModal: boolean;
  handleCloseDeleteModal: () => void;
};

export type LevelCreateModalProps = {
  showCreateLevelModal: boolean;
  handleCloseCreateLevelModal: () => void;
};
export type LevelEditModalProps = {
  item: LevelsProps;
  showEditModal: boolean;
  handleCloseEditModal: () => void;
};
export type LevelDeleteModalProps = {
  item: LevelsProps;
  showDeleteModal: boolean;
  handleCloseDeleteModal: () => void;
};

export type RisksCreateModalProps = {
  showCreateRisksModal: boolean;
  handleCloseCreateRisksModal: () => void;
};
export type RisksEditModalProps = {
  item: RisksProps;
  showEditModal: boolean;
  handleCloseEditModal: () => void;
};
export type RisksDeleteModalProps = {
  item: RisksProps;
  name: string;
  showDeleteModal: boolean;
  handleCloseDeleteModal: () => void;
};
