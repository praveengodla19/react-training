package com.example.todos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
	@Autowired
	private TaskService taskService;

	@GetMapping("/user/tasks")
	@CrossOrigin(origins = "http://localhost:5173")
	public ResponseEntity<List<Task>> getAllTasksForUser() {
		return ResponseEntity.ok(taskService.getAllTasks());
	}

	@GetMapping("/admin/tasks")
	@CrossOrigin(origins = "http://localhost:5173")
	public ResponseEntity<List<Task>> getAllTasksForAdmin() {
		return ResponseEntity.ok(taskService.getAllTasks());
	}

	@GetMapping("/user/tasks/{id}")
	@CrossOrigin(origins = "http://localhost:5173")
	public ResponseEntity<Task> getTaskByIdForUser(@PathVariable Long id) {
		return taskService.getTaskById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

	@PostMapping("/user/tasks")
	@CrossOrigin(origins = "http://localhost:5173")
	public ResponseEntity<Task> createTaskForUser(@RequestBody Task task) {
		return ResponseEntity.ok(taskService.createTask(task));
	}

	@PutMapping("/user/tasks/{id}")
	@CrossOrigin(origins = "http://localhost:5173")
	public ResponseEntity<Task> updateTaskForUser(@PathVariable Long id, @RequestBody Task task) {
		return ResponseEntity.ok(taskService.updateTask(id, task));
	}

	@DeleteMapping("/user/tasks/{id}")
	@CrossOrigin(origins = "http://localhost:5173")
	public ResponseEntity<Void> deleteTaskForUser(@PathVariable Long id) {
		taskService.deleteTask(id);
		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/admin/tasks/{id}")
	@CrossOrigin(origins = "http://localhost:5173")
	public ResponseEntity<Void> deleteTaskForAdmin(@PathVariable Long id) {
		taskService.deleteTask(id);
		return ResponseEntity.ok().build();
	}
}