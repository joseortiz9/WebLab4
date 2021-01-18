package ru.students.lab.weblab4.websockets;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;
import ru.students.lab.weblab4.payload.ObjWithMsgResponse;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Service
public class NotificationDispatcher {
    private static final Logger LOG = LoggerFactory.getLogger(NotificationDispatcher.class);

    @Autowired
    private SimpMessagingTemplate template;
    private final Set<String> listeners = new HashSet<>();

    public <T extends Serializable> void dispatch(T addedObj) {
        for (String listener : listeners) {
            LOG.info("Sending notification to " + listener);

            SimpMessageHeaderAccessor headerAccessor = SimpMessageHeaderAccessor.create(SimpMessageType.MESSAGE);
            headerAccessor.setSessionId(listener);
            headerAccessor.setLeaveMutable(true);

            template.convertAndSendToUser(
                    listener,
                    "/topic/item",
                    new ObjWithMsgResponse<T>("Point added by: " + listener, addedObj),
                    headerAccessor.getMessageHeaders());
        }
    }

    @EventListener
    public void sessionDisconnectionHandler(SessionDisconnectEvent event) {
        String sessionId = event.getSessionId();
        LOG.info("Disconnecting " + sessionId + "!");
        remove(sessionId);
    }

    public void add(String sessionId) {
        listeners.add(sessionId);
    }
    public void remove(String sessionId) {
        listeners.remove(sessionId);
    }
}