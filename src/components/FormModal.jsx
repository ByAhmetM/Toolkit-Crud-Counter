import { Button, Form, Modal } from "react-bootstrap";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, close, editItem }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newTask = Object.fromEntries(form.entries());

    if (editItem) {
      dispatch(editTask({ ...newTask, id: editItem.id }));
    } else {
      dispatch(addTask(newTask));
    }

    close();
  };
  return (
    <Modal
      show={isOpen}
      onHide={close}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-black"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {editItem ? "Görevi Düzenle" : "Yeni Görev Oluştur"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              type="text"
              name="title"
              placeholder="Görev Giriniz"
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Yazar</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              type="text"
              name="author"
              placeholder="İsminizi Giriniz"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Atanan Kişi</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              type="text"
              name="assigned_to"
              placeholder="Atanan kişiyi Giriniz"
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              type="date"
              name="end_date"
            />
          </Form.Group>

          <Modal.Footer className="mt-3">
            <Button onClick={close}>Close</Button>
            <Button type="submit" variant="success">
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
