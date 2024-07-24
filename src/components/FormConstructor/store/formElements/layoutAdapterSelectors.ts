import { RootState } from '../setupStore'
import { layuoutAdapter } from './initialState'

const { selectAll, selectById } = layuoutAdapter.getSelectors<RootState>(
  state => state.formConstructor.allElements,
)

export { selectAll, selectById }
