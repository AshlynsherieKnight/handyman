import WorkerShow from './WorkerShow';

const WorkerList = ({ workers, updateWorker, deleteWorker, created_at }) => (
  <>
    { workers.map(w =>
      <WorkerShow
        key={w.id}
        {...w}
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
      />
    )}
  </>
)

export default WorkerList;