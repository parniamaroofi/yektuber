/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Resulto
 * OpenAPI spec version: 1.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
export type PostApiMediaUpdateBody = {
  Image?: Blob;
};

export type PostApiMediaUpdateParams = {
Id?: number;
Name?: string;
ChannelId?: number;
};

export type PostApiMediaCreateBody = {
  Image?: Blob;
};

export type PostApiMediaCreateParams = {
Name?: string;
ChannelId?: number;
};

export interface UpdateCompaignCommand {
  businessId?: number;
  /** @nullable */
  endDateShamsi?: string | null;
  id?: number;
  isActive?: boolean;
  /** @nullable */
  name?: string | null;
  /** @nullable */
  startDateShamsi?: string | null;
  totalBudget?: number;
}

export interface UpdateCompaignChannelsCommand {
  budget?: number;
  channelId?: number;
  compaignId?: number;
  /** @nullable */
  endDateShamsi?: string | null;
  id?: number;
  /** @nullable */
  startDateShamsi?: string | null;
}

export interface UpdateChannelCommand {
  id?: number;
  /** @nullable */
  name?: string | null;
}

export interface UpdateCampaignCommand {
  /** @nullable */
  address?: string | null;
  budget?: number;
  budgetType?: BudgetType;
  duration?: number;
  fieldActivity?: FieldActivity;
  id?: number;
  keyPerformanceIndicator?: number;
  /** @nullable */
  name?: string | null;
  target?: Target;
  userId?: number;
}

export interface UpdateBusinessCommand {
  /** @nullable */
  address?: string | null;
  /** @nullable */
  email?: string | null;
  id?: number;
  /** @nullable */
  name?: string | null;
  /** @nullable */
  phone?: string | null;
  /** @nullable */
  postalCode?: string | null;
  status?: number;
  /** @nullable */
  userName?: string | null;
}

export interface UpdateBusinessAgentCommand {
  businessId?: number;
  /** @nullable */
  email?: string | null;
  id?: number;
  /** @nullable */
  mobile?: string | null;
  /** @nullable */
  password?: string | null;
  /** @nullable */
  userName?: string | null;
}

export type Target = typeof Target[keyof typeof Target];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Target = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
  NUMBER_6: 6,
  NUMBER_7: 7,
  NUMBER_8: 8,
} as const;

export interface SearchAndPagination {
  /** @nullable */
  page?: number | null;
  /** @nullable */
  pageSize?: number | null;
  /** @nullable */
  search?: string | null;
}

export interface RegisterUserCommand {
  /** @nullable */
  firstname?: string | null;
  /** @nullable */
  lastname?: string | null;
  /** @nullable */
  password?: string | null;
  /** @nullable */
  username?: string | null;
}

export interface PaginationParam {
  page?: number;
  pageSize?: number;
}

export interface LoginCommand {
  /** @nullable */
  password?: string | null;
  /** @nullable */
  username?: string | null;
}

export interface GetTargetDataParam {
  targetId?: number;
  targetValueId?: number;
}

export interface GetByIsActiveCommand {
  isActive?: boolean;
  /** @nullable */
  page?: number | null;
  /** @nullable */
  pageSize?: number | null;
  /** @nullable */
  search?: string | null;
}

export interface GetByIdCommand {
  id?: number;
}

export interface GetBusinessAgentCommand {
  businessId?: number;
  /** @nullable */
  page?: number | null;
  /** @nullable */
  pageSize?: number | null;
}

export interface GetAllMediaParameter {
  /** @nullable */
  channelId?: number | null;
  /** @nullable */
  page?: number | null;
  /** @nullable */
  pageSize?: number | null;
  /** @nullable */
  search?: string | null;
}

export interface GetAllCompaignCommand {
  businessId?: number;
  /** @nullable */
  page?: number | null;
  /** @nullable */
  pageSize?: number | null;
  /** @nullable */
  search?: string | null;
}

export interface GetAllCampaignParameter {
  /** @nullable */
  page?: number | null;
  /** @nullable */
  pageSize?: number | null;
  /** @nullable */
  search?: string | null;
  /** @nullable */
  userId?: number | null;
}

export type FieldActivity = typeof FieldActivity[keyof typeof FieldActivity];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FieldActivity = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
  NUMBER_6: 6,
  NUMBER_7: 7,
  NUMBER_8: 8,
  NUMBER_9: 9,
  NUMBER_10: 10,
  NUMBER_11: 11,
  NUMBER_12: 12,
  NUMBER_13: 13,
  NUMBER_14: 14,
  NUMBER_15: 15,
  NUMBER_16: 16,
  NUMBER_17: 17,
  NUMBER_18: 18,
  NUMBER_19: 19,
  NUMBER_20: 20,
  NUMBER_21: 21,
  NUMBER_22: 22,
  NUMBER_23: 23,
  NUMBER_24: 24,
  NUMBER_25: 25,
  NUMBER_26: 26,
  NUMBER_27: 27,
  NUMBER_28: 28,
} as const;

export interface DeleteCommand {
  id?: number;
}

export interface CreateCompaignCommand {
  businessId?: number;
  /** @nullable */
  endDateShamsi?: string | null;
  /** @nullable */
  name?: string | null;
  /** @nullable */
  startDateShamsi?: string | null;
  totalBudget?: number;
}

export interface CreateChannelCommand {
  /** @nullable */
  name?: string | null;
}

export interface CreateCampaignCommand {
  /** @nullable */
  address?: string | null;
  budget?: number;
  budgetType?: BudgetType;
  duration?: number;
  fieldActivity?: FieldActivity;
  keyPerformanceIndicator?: number;
  /** @nullable */
  name?: string | null;
  target?: Target;
  userId?: number;
}

export interface CreateBusinessCommand {
  /** @nullable */
  address?: string | null;
  /** @nullable */
  email?: string | null;
  /** @nullable */
  name?: string | null;
  /** @nullable */
  phone?: string | null;
  /** @nullable */
  postalCode?: string | null;
  /** @nullable */
  userName?: string | null;
}

export interface CreateBusinessAgentCommand {
  businessId?: number;
  /** @nullable */
  email?: string | null;
  /** @nullable */
  mobile?: string | null;
  /** @nullable */
  password?: string | null;
  /** @nullable */
  userName?: string | null;
}

export interface CampaignChannelsDto {
  budget?: number;
  channelId?: number;
  /** @nullable */
  endDateShamsi?: string | null;
  /** @nullable */
  startDateShamsi?: string | null;
}

export type BudgetType = typeof BudgetType[keyof typeof BudgetType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BudgetType = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;

export interface AddChannelCommand {
  /** @nullable */
  campaignChannels?: CampaignChannelsDto[] | null;
  compaignId?: number;
}

export interface ActiveOrDeActiveCommand {
  id?: number;
  isActive?: boolean;
}





  export const getResulto = () => {
const postApiAuthLogin = <TData = AxiosResponse<void>>(
    loginCommand: LoginCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Auth/Login`,
      loginCommand,options
    );
  }

const postApiAuthRegister = <TData = AxiosResponse<void>>(
    registerUserCommand: RegisterUserCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Auth/Register`,
      registerUserCommand,options
    );
  }

const postApiBusinessCreate = <TData = AxiosResponse<void>>(
    createBusinessCommand: CreateBusinessCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Business/Create`,
      createBusinessCommand,options
    );
  }

const postApiBusinessGetAll = <TData = AxiosResponse<void>>(
    searchAndPagination: SearchAndPagination, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Business/GetAll`,
      searchAndPagination,options
    );
  }

const postApiBusinessGetById = <TData = AxiosResponse<void>>(
    getByIdCommand: GetByIdCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Business/GetById`,
      getByIdCommand,options
    );
  }

const postApiBusinessUpdate = <TData = AxiosResponse<void>>(
    updateBusinessCommand: UpdateBusinessCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Business/Update`,
      updateBusinessCommand,options
    );
  }

const postApiBusinessDelete = <TData = AxiosResponse<void>>(
    deleteCommand: DeleteCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Business/Delete`,
      deleteCommand,options
    );
  }

const postApiBusinessAgentCreate = <TData = AxiosResponse<void>>(
    createBusinessAgentCommand: CreateBusinessAgentCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/BusinessAgent/Create`,
      createBusinessAgentCommand,options
    );
  }

const postApiBusinessAgentGetAll = <TData = AxiosResponse<void>>(
    getBusinessAgentCommand: GetBusinessAgentCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/BusinessAgent/GetAll`,
      getBusinessAgentCommand,options
    );
  }

const postApiBusinessAgentUpdate = <TData = AxiosResponse<void>>(
    updateBusinessAgentCommand: UpdateBusinessAgentCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/BusinessAgent/Update`,
      updateBusinessAgentCommand,options
    );
  }

const postApiBusinessAgentDelete = <TData = AxiosResponse<void>>(
    deleteCommand: DeleteCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/BusinessAgent/Delete`,
      deleteCommand,options
    );
  }

const postApiCampaignCreate = <TData = AxiosResponse<void>>(
    createCampaignCommand: CreateCampaignCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Campaign/Create`,
      createCampaignCommand,options
    );
  }

const postApiCampaignGetAll = <TData = AxiosResponse<void>>(
    getAllCampaignParameter: GetAllCampaignParameter, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Campaign/GetAll`,
      getAllCampaignParameter,options
    );
  }

const postApiCampaignGetById = <TData = AxiosResponse<void>>(
    getByIdCommand: GetByIdCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Campaign/GetById`,
      getByIdCommand,options
    );
  }

const postApiCampaignUpdate = <TData = AxiosResponse<void>>(
    updateCampaignCommand: UpdateCampaignCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Campaign/Update`,
      updateCampaignCommand,options
    );
  }

const postApiCampaignDelete = <TData = AxiosResponse<void>>(
    deleteCommand: DeleteCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Campaign/Delete`,
      deleteCommand,options
    );
  }

const postApiChannelCreate = <TData = AxiosResponse<void>>(
    createChannelCommand: CreateChannelCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Channel/Create`,
      createChannelCommand,options
    );
  }

const postApiChannelGetAll = <TData = AxiosResponse<void>>(
    searchAndPagination: SearchAndPagination, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Channel/GetAll`,
      searchAndPagination,options
    );
  }

const postApiChannelGetById = <TData = AxiosResponse<void>>(
    getByIdCommand: GetByIdCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Channel/GetById`,
      getByIdCommand,options
    );
  }

const postApiChannelUpdate = <TData = AxiosResponse<void>>(
    updateChannelCommand: UpdateChannelCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Channel/Update`,
      updateChannelCommand,options
    );
  }

const postApiChannelDelete = <TData = AxiosResponse<void>>(
    deleteCommand: DeleteCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Channel/Delete`,
      deleteCommand,options
    );
  }

const postApiMediaCreate = <TData = AxiosResponse<void>>(
    postApiMediaCreateBody: PostApiMediaCreateBody,
    params?: PostApiMediaCreateParams, options?: AxiosRequestConfig
 ): Promise<TData> => {const formData = new FormData();
if(postApiMediaCreateBody.Image !== undefined) {
 formData.append('Image', postApiMediaCreateBody.Image)
 }

    return axios.post(
      `/api/Media/Create`,
      formData,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

const postApiMediaGetAll = <TData = AxiosResponse<void>>(
    getAllMediaParameter: GetAllMediaParameter, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Media/GetAll`,
      getAllMediaParameter,options
    );
  }

const postApiMediaGetById = <TData = AxiosResponse<void>>(
    getByIdCommand: GetByIdCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Media/GetById`,
      getByIdCommand,options
    );
  }

const postApiMediaUpdate = <TData = AxiosResponse<void>>(
    postApiMediaUpdateBody: PostApiMediaUpdateBody,
    params?: PostApiMediaUpdateParams, options?: AxiosRequestConfig
 ): Promise<TData> => {const formData = new FormData();
if(postApiMediaUpdateBody.Image !== undefined) {
 formData.append('Image', postApiMediaUpdateBody.Image)
 }

    return axios.post(
      `/api/Media/Update`,
      formData,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

const postApiMediaDelete = <TData = AxiosResponse<void>>(
    deleteCommand: DeleteCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/Media/Delete`,
      deleteCommand,options
    );
  }

const postApiOldChannelGetAll = <TData = AxiosResponse<void>>(
    paginationParam: PaginationParam, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldChannel/GetAll`,
      paginationParam,options
    );
  }

const postApiOldCompaignCreate = <TData = AxiosResponse<void>>(
    createCompaignCommand: CreateCompaignCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/Create`,
      createCompaignCommand,options
    );
  }

const postApiOldCompaignGetAll = <TData = AxiosResponse<void>>(
    searchAndPagination: SearchAndPagination, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/GetAll`,
      searchAndPagination,options
    );
  }

const postApiOldCompaignGetAllByBusinessId = <TData = AxiosResponse<void>>(
    getAllCompaignCommand: GetAllCompaignCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/GetAllByBusinessId`,
      getAllCompaignCommand,options
    );
  }

const postApiOldCompaignGetByIsActive = <TData = AxiosResponse<void>>(
    getByIsActiveCommand: GetByIsActiveCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/GetByIsActive`,
      getByIsActiveCommand,options
    );
  }

const postApiOldCompaignActiveOrDeActive = <TData = AxiosResponse<void>>(
    activeOrDeActiveCommand: ActiveOrDeActiveCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/ActiveOrDeActive`,
      activeOrDeActiveCommand,options
    );
  }

const postApiOldCompaignGetById = <TData = AxiosResponse<void>>(
    getByIdCommand: GetByIdCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/GetById`,
      getByIdCommand,options
    );
  }

const postApiOldCompaignUpdate = <TData = AxiosResponse<void>>(
    updateCompaignCommand: UpdateCompaignCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/Update`,
      updateCompaignCommand,options
    );
  }

const postApiOldCompaignDelete = <TData = AxiosResponse<void>>(
    deleteCommand: DeleteCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/Delete`,
      deleteCommand,options
    );
  }

const postApiOldCompaignAddChannel = <TData = AxiosResponse<void>>(
    addChannelCommand: AddChannelCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/AddChannel`,
      addChannelCommand,options
    );
  }

const postApiOldCompaignDeleteChannel = <TData = AxiosResponse<void>>(
    deleteCommand: DeleteCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/DeleteChannel`,
      deleteCommand,options
    );
  }

const postApiOldCompaignUpdateChannel = <TData = AxiosResponse<void>>(
    updateCompaignChannelsCommand: UpdateCompaignChannelsCommand, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/OldCompaign/UpdateChannel`,
      updateCompaignChannelsCommand,options
    );
  }

const postApiTargetDataGet = <TData = AxiosResponse<void>>(
    getTargetDataParam: GetTargetDataParam, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/TargetData/Get`,
      getTargetDataParam,options
    );
  }

return {postApiAuthLogin,postApiAuthRegister,postApiBusinessCreate,postApiBusinessGetAll,postApiBusinessGetById,postApiBusinessUpdate,postApiBusinessDelete,postApiBusinessAgentCreate,postApiBusinessAgentGetAll,postApiBusinessAgentUpdate,postApiBusinessAgentDelete,postApiCampaignCreate,postApiCampaignGetAll,postApiCampaignGetById,postApiCampaignUpdate,postApiCampaignDelete,postApiChannelCreate,postApiChannelGetAll,postApiChannelGetById,postApiChannelUpdate,postApiChannelDelete,postApiMediaCreate,postApiMediaGetAll,postApiMediaGetById,postApiMediaUpdate,postApiMediaDelete,postApiOldChannelGetAll,postApiOldCompaignCreate,postApiOldCompaignGetAll,postApiOldCompaignGetAllByBusinessId,postApiOldCompaignGetByIsActive,postApiOldCompaignActiveOrDeActive,postApiOldCompaignGetById,postApiOldCompaignUpdate,postApiOldCompaignDelete,postApiOldCompaignAddChannel,postApiOldCompaignDeleteChannel,postApiOldCompaignUpdateChannel,postApiTargetDataGet}};
export type PostApiAuthLoginResult = AxiosResponse<void>
export type PostApiAuthRegisterResult = AxiosResponse<void>
export type PostApiBusinessCreateResult = AxiosResponse<void>
export type PostApiBusinessGetAllResult = AxiosResponse<void>
export type PostApiBusinessGetByIdResult = AxiosResponse<void>
export type PostApiBusinessUpdateResult = AxiosResponse<void>
export type PostApiBusinessDeleteResult = AxiosResponse<void>
export type PostApiBusinessAgentCreateResult = AxiosResponse<void>
export type PostApiBusinessAgentGetAllResult = AxiosResponse<void>
export type PostApiBusinessAgentUpdateResult = AxiosResponse<void>
export type PostApiBusinessAgentDeleteResult = AxiosResponse<void>
export type PostApiCampaignCreateResult = AxiosResponse<void>
export type PostApiCampaignGetAllResult = AxiosResponse<void>
export type PostApiCampaignGetByIdResult = AxiosResponse<void>
export type PostApiCampaignUpdateResult = AxiosResponse<void>
export type PostApiCampaignDeleteResult = AxiosResponse<void>
export type PostApiChannelCreateResult = AxiosResponse<void>
export type PostApiChannelGetAllResult = AxiosResponse<void>
export type PostApiChannelGetByIdResult = AxiosResponse<void>
export type PostApiChannelUpdateResult = AxiosResponse<void>
export type PostApiChannelDeleteResult = AxiosResponse<void>
export type PostApiMediaCreateResult = AxiosResponse<void>
export type PostApiMediaGetAllResult = AxiosResponse<void>
export type PostApiMediaGetByIdResult = AxiosResponse<void>
export type PostApiMediaUpdateResult = AxiosResponse<void>
export type PostApiMediaDeleteResult = AxiosResponse<void>
export type PostApiOldChannelGetAllResult = AxiosResponse<void>
export type PostApiOldCompaignCreateResult = AxiosResponse<void>
export type PostApiOldCompaignGetAllResult = AxiosResponse<void>
export type PostApiOldCompaignGetAllByBusinessIdResult = AxiosResponse<void>
export type PostApiOldCompaignGetByIsActiveResult = AxiosResponse<void>
export type PostApiOldCompaignActiveOrDeActiveResult = AxiosResponse<void>
export type PostApiOldCompaignGetByIdResult = AxiosResponse<void>
export type PostApiOldCompaignUpdateResult = AxiosResponse<void>
export type PostApiOldCompaignDeleteResult = AxiosResponse<void>
export type PostApiOldCompaignAddChannelResult = AxiosResponse<void>
export type PostApiOldCompaignDeleteChannelResult = AxiosResponse<void>
export type PostApiOldCompaignUpdateChannelResult = AxiosResponse<void>
export type PostApiTargetDataGetResult = AxiosResponse<void>
