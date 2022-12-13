import WorkerShow from './WorkerShow';

const WorkerList = ({ workers, updateWorker, deleteWorker, created_at }) => (
  <>
    { workers.map(u =>
      <WorkerShow
        key={u.id}
        {...u}
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
      />
    )}
  </>
)

export default WorkerList;