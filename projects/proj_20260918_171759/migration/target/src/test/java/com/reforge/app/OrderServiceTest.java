package com.reforge.app;

import com.reforge.app.model.Order;
import com.reforge.app.repository.OrderRepository;
import com.reforge.app.service.OrderService;
import com.reforge.app.service.PaymentService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.math.BigDecimal;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class OrderServiceTest {
    @Mock
    private OrderRepository orderRepository;

    @Mock
    private PaymentService paymentService;

    @InjectMocks
    private OrderService orderService;

    @Test
    public void testCreateOrderSuccess() {
        Order order = new Order(1L, new BigDecimal("99.99"), "PENDING");
        when(paymentService.processPayment(any(), any())).thenReturn("txn_12345");
        when(orderRepository.save(any())).thenAnswer(invocation -> invocation.getArgument(0));

        Order result = orderService.createOrder(order);

        assertNotNull(result);
        assertEquals("CONFIRMED", result.getStatus());
        assertEquals("txn_12345", result.getTransactionId());
        verify(paymentService, times(1)).processPayment(1L, new BigDecimal("99.99"));
    }
}